import { IOperation } from './useOperations';
export const useOperationMutations = (id: number) => ({
  deleteOperation() {
    return fetch(`/api/operations/${id}`, {
      method: 'DELETE',
    });
  },
  updateOperation(operation: Partial<IOperation>) {
    return fetch(`/api/operations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(operation),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
});
