import axios from 'axios';
import { useMutation } from 'react-query';

export const useDeleteOperation = (id: number) => {
  return useMutation(() => axios.delete(`/api/operations/${id}`));
};
