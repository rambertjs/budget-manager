type BalanceQueryData = {
  income: number;
  expenses: number;
  balance: number;
};

export const getBalance = () => {
  return fetch('/api/operations/balance').then((res) =>
    res.json()
  ) as unknown as BalanceQueryData;
};
