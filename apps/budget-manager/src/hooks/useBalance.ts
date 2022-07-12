import { useQuery } from 'react-query';
import axios from 'axios';

type BalanceQueryData = {
  income: number;
  expenses: number;
  balance: number;
};

export const useBalance = () => {
  return useQuery(['balance'], async () => {
    const { data } = await axios.get<BalanceQueryData>(
      '/api/operations/balance'
    );
    return data;
  });
};
