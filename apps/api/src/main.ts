import 'dotenv/config';
import * as express from 'express';
import { AuthRouter } from './auth/routes';
import { OperationsRouter } from './operations/routes';
import { PrismaClient } from '@alkemy-fullstack/prisma-client';
import {
  prismaErrorMiddleware,
  customErrorMiddleware,
} from './errorMiddleware';
import { AuthMiddleware } from './auth/middleware';
import * as path from 'path';

const app = express();
app.use(express.json());
export const prisma = new PrismaClient();

app.use('/api/auth', AuthRouter);
app.use('/api/operations', [AuthMiddleware, OperationsRouter]);
app.use(prismaErrorMiddleware);
app.use(customErrorMiddleware);

const BUILD_PATH = path.join(__dirname, '../budget-manager');
app.use(express.static(BUILD_PATH));
app.get('*', (req, res) => {
  res.sendFile(path.join(BUILD_PATH, 'index.html'));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
