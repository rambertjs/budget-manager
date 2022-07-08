import { type Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

export type Operation = Omit<DBOperation, 'date'> & { date: string };
export type Balance = {
  income: number;
  expenses: number;
};

type Params<T extends boolean> = { withBalance: T; take?: number };

export const useOperations = <T extends boolean>({
  withBalance,
  take,
}: Params<T>): T extends true
  ? {
      operations: Operation[];
      balance: Balance;
    }
  : {
      operations: Operation[];
    } => {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    const params = new URLSearchParams();
    withBalance && params.append('withBalance', '1');
    take && params.append('take', `${take}`);

    fetch(`/api/operations?${params}`)
      .then((res) => res.json())
      .then(({ operations, balance }) => {
        setOperations(operations);
        if (balance) setBalance(balance);
      });
  }, [withBalance, take]);

  return { operations, ...(withBalance && { balance }) };
};
