import { prisma } from '../main';
import { Router } from 'express';
import { Type } from '@alkemy-fullstack/prisma-client';

const OperationsRouter = Router();

OperationsRouter.get('/', async (req, res) => {
  const lookupParams = {
    type: (req.query.type || undefined) as Type,
  };

  const operations = await prisma.operation.findMany({ where: lookupParams });
  res.json(operations);
});

OperationsRouter.post('/', async (req, res) => {
  const newOperation = await prisma.operation.create({
    data: req.body,
  });
  res.json(newOperation);
});

OperationsRouter.patch('/:id', async (req, res) => {
  const id = +req.params.id;
  const updateBody = req.body;

  if (req.body.type)
    return res.status(400).json({ error: 'cannot update operation type' });

  if (isNaN(id)) return res.status(400).json({ error: 'invalid id' });

  try {
    const updatedOp = await prisma.operation.update({
      where: {
        id: id,
      },
      data: updateBody,
    });

    return res.json(updatedOp);
  } catch (e) {
    if (e.code == 'P2025')
      return res.status(404).json({ error: 'operation not found' });
    return res.status(500).json({ error: 'something went wrong' });
  }
});

OperationsRouter.delete('/:id', async (req, res) => {
  const id = +req.params.id;
  if (isNaN(id)) return res.status(400).json({ error: 'invalid id' });

  try {
    await prisma.operation.delete({ where: { id: id } });
    return res.status(204).end();
  } catch (e) {
    if (e.code == 'P2025')
      return res.status(404).json({ error: 'operation not found' });
    return res.status(500).json({ error: 'something went wrong' });
  }
});
export { OperationsRouter };
