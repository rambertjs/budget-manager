import { Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

type Operation = Omit<DBOperation, 'date'> & { date: string };

export const useOperations = () => {
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    fetch('/api/operations')
      .then((res) => res.json())
      .then(setOperations);
  }, []);

  return operations;
};
