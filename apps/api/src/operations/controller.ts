import { CustomError } from './../errorMiddleware';
import { OperationsService } from './service';

export const OperationsController = {
  async create(req, res) {
    const newOperation = await OperationsService.create(req.body);
    res.json(newOperation);
  },
  async get(req, res) {
    const lookupParams = {
      where: {
        type: req.query.type || undefined,
      },
    };

    if (req.query.page) {
      const page = +req.query.page;
      const operations = await OperationsService.getPage(page, lookupParams);
      return res.json(operations);
    }

    const operations = await OperationsService.getAll(lookupParams);
    return res.json({ operations });
  },
  async getBalance(req, res) {
    const balance = await OperationsService.getBalance();
    return res.json(balance);
  }

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
