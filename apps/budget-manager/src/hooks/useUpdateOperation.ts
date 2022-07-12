import axios from 'axios';
import { useMutation } from 'react-query';
import { IOperation } from './useOperations';

export const useUpdateOperation = (id: number) => {
  return useMutation((operation: Partial<IOperation>) =>
    axios.patch<IOperation>(`/api/operations/${id}`, operation)
  );
};
