import { Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

type Operation = Omit<DBOperation, 'date'> & { date: string };
type Balance = {
  income: number;
  expenses: number;
};
type Params<T extends boolean> = { withBalance: T };

export const useOperations = <T extends boolean>({
  withBalance,
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
    fetch(`/api/operations${withBalance && '?withBalance'}`)
      .then((res) => res.json())
      .then(({ operations, balance }) => {
        setOperations(operations);
        if (balance) setBalance(balance);
      });
  }, [withBalance]);

  return { operations, ...(withBalance && { balance }) };
};
