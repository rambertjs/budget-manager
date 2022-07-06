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

export { OperationsRouter };
