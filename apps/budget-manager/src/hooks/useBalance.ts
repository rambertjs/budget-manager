import { useEffect, useState } from 'react';

export type Balance = {
  income: number;
  expenses: number;
};

export const useBalance = () => {
  const [balance, setBalance] = useState<Balance>({
    income: 0,
    expenses: 0,
  });

  useEffect(() => {
    fetch('/api/operations/balance')
      .then((res) => res.json())
      .then((balance) => {
        setBalance(balance);
      });
  }, []);

  return { balance };
};
