import { prisma } from '../main';
import { Router } from 'express';

const OperacionesRouter = Router();

OperacionesRouter.get('/', async (_req, res) => {
  const operaciones = await prisma.operacion.findMany();
  res.json(operaciones);
});

OperacionesRouter.post('/', async (req, res) => {
  const nuevaOperacion = await prisma.operacion.create({
    data: req.body,
  });
  res.json(nuevaOperacion);
});

export { OperacionesRouter };
