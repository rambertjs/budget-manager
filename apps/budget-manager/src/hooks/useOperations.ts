import { useQuery } from 'react-query';
import axios from 'axios';
import { type Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
export type IOperation = Omit<DBOperation, 'date'> & { date: string };

type OperationQueryData = {
  operations: IOperation[];
  totalPages: number;
};

export const useOperations = (page = 1) => {
  return useQuery(
    ['operations', page],
    async () => {
      const { data } = await axios.get<OperationQueryData>(
        `/api/operations?page=${page}`
      );
      return data;
    },
    { keepPreviousData: true }
  );
};
