import { Response } from 'express';
import { Prisma } from '@alkemy-fullstack/prisma-client';

export class CustomError extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}

export const prismaErrorMiddleware = (err, req, res: Response, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2025':
        return res.status(404).json({ error: 'Resource not found' });
      default:
        return res.status(500).json({ error: 'Internal server error' });
    }
  }
  next(err);
};

export const customErrorMiddleware = (err, _req, res: Response) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
  res.status(500).json({ error: 'Internal server error' });
};
