import { Card, Text } from '@mantine/core';
import { formatCurrency } from '../../utils/formatCurrency';

export const BalanceCard = ({
  title,
  currency,
  style,
}: {
  title: string;
  currency: number;
  style?: Record<string, unknown>;
}) => {
  return (
    <Card shadow="md" {...{ style }}>
      <Text>{title}</Text>
      <Text size="md">{formatCurrency(currency)}</Text>
    </Card>
  );
};
