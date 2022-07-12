import { type Operation as DBOperation } from '@alkemy-fullstack/prisma-client';
export type IOperation = Omit<DBOperation, 'date'> & { date: string };

type OperationQueryData = {
  operations: IOperation[];
  totalPages: number;
};

export const getOperations = (page = 1) => {
  return fetch(`/api/operations?page=${page}`).then((res) =>
    res.json()
  ) as Promise<OperationQueryData>;
};

export const createOperation = (operation: Partial<IOperation>) => {
  return fetch('/api/operations', {
    method: 'POST',
    body: JSON.stringify(operation),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()) as Promise<IOperation>;
};

export const updateOperation = (id: number, operation: Partial<IOperation>) => {
  return fetch(`/api/operations/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(operation),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()) as Promise<IOperation>;
};

export const deleteOperation = (id: number) => {
  return fetch('/api/operations/' + id, {
    method: 'DELETE',
  });
};
