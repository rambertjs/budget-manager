import { type Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

export type IOperation = Omit<DBOperation, 'date'> & { date: string };

export const useOperations = (page: number) => {
  const [operations, setOperations] = useState<IOperation[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/operations?page=${page}`)
      .then((res) => res.json())
      .then(({ data, totalPages }) => {
        setOperations(data);
        setTotalPages(totalPages);
      });
  }, [page]);

  return { operations, totalPages };
};
