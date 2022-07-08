import * as express from 'express';
import { OperationsRouter } from './operations/routes';
import { PrismaClient } from '@alkemy-fullstack/prisma-client';

const app = express();
app.use(express.json());
export const prisma = new PrismaClient();

app.use('/api/operations', OperationsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
