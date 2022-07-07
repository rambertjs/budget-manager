import { Operation as DBOperation } from '@alkemy-fullstack/prisma-client';

export type Operation = Omit<DBOperation, 'date'> & { date: string };
export type Balance = {
  income: number;
  expenses: number;
};
