import { CustomError } from './../errorMiddleware';
import { OperationsService } from './service';
import { Type } from '@alkemy-fullstack/prisma-client';

export const OperationsController = {
  async create(req, res) {
    const newOperation = await OperationsService.create(req.body);
    res.json(newOperation);
  },
  async getAll(req, res) {
    const balance =
      req.query.withBalance !== undefined
        ? OperationsService.getBalance()
        : null;

    const lookupParams = {
      where: {
        type: (req.query.type || undefined) as Type,
      },
      take: +req.query.take || undefined,
    };

    const operations = OperationsService.getAll(lookupParams);

    res.json({ operations, ...{ balance } });
  },

  async update(req, res, next) {
    const id = +req.params.id;
    const updateBody = req.body;

    if (updateBody.type)
      next(new CustomError(400, 'cannot update operation type'));
    if (isNaN(id)) next(new CustomError(400, 'invalid id'));

    OperationsService.update(id, updateBody).then(res.json).catch(next);
  },
  async delete(req, res, next) {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'invalid id' });

    try {
      await OperationsService.delete(id);
      return res.status(204).end();
    } catch (e) {
      next(e);
    }
  },
};
