import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { IOperation } from './useOperations';

export const useUpdateOperation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    (operation: Partial<IOperation>) =>
      axios.patch<IOperation>(`/api/operations/${id}`, operation),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['operations']);
        queryClient.invalidateQueries(['balance']);
      },
    }
  );
};
