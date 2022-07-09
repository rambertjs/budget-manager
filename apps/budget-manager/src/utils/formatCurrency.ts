export const formatCurrency = (amount: string | number | undefined) =>
  Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(+(amount || 0) / 100);
