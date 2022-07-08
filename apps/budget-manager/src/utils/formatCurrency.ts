export const formatCurrency = (amount: string | number | undefined) =>
  `$${+(amount || 0) / 100}`;
