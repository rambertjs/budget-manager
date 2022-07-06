import { prisma } from '../main';
import { Router } from 'express';

const OperationsRouter = Router();

OperationsRouter.get('/', async (_req, res) => {
  const operations = await prisma.operation.findMany();
  res.json(operations);
});

OperationsRouter.post('/', async (req, res) => {
  const newOperation = await prisma.operation.create({
    data: req.body,
  });
  res.json(newOperation);
});

export { OperationsRouter };
