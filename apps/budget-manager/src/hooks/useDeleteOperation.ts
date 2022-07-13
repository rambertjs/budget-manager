import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteOperation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => axios.delete(`/api/operations/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['operations']);
      queryClient.invalidateQueries(['balance']);
    },
  });
};
