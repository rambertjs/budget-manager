import { Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

type Operation = Omit<DBOperation, 'date'> & { date: string };
type Params = { withBalance: boolean };

export const useOperations = ({ withBalance }: Params) => {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [balance, setBalance] = useState();

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
