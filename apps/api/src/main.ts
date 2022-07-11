import 'dotenv/config';
import * as express from 'express';
import { AuthRouter } from './auth/routes';
import { OperationsRouter } from './operations/routes';
import { PrismaClient } from '@alkemy-fullstack/prisma-client';
import {
  prismaErrorMiddleware,
  customErrorMiddleware,
} from './errorMiddleware';

const app = express();
app.use(express.json());
export const prisma = new PrismaClient();

app.use('/api/auth', AuthRouter);
app.use('/api/operations', OperationsRouter);
app.use(prismaErrorMiddleware);
app.use(customErrorMiddleware);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
