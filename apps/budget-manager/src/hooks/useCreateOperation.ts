import axios from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IOperation } from './useOperations';

export const useCreateOperation = () => {
  const navigate = useNavigate();
  return useMutation(
    (operation: Partial<IOperation>) =>
      axios.post<IOperation>('/api/operations', operation),
    {
      onSuccess: () => navigate('/'),
    }
  );
};
