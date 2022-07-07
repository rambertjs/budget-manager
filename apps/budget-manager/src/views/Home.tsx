import {
  Stack,
  Card,
  Grid,
  Space,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core';
import dayjs from 'dayjs';
import { useOperations } from '../hooks/useOperations';
import { formatCurrency } from '../utils/formatCurrency';

export const Home = () => {
  const theme = useMantineTheme();
  const { operations, balance } = useOperations({
    withBalance: true,
    take: 10,
  });

  return (
    <Stack spacing="xl">
      <Card shadow="md">
        <Grid styles={{ width: '100%' }}>
          <Grid.Col>
            <Card shadow="md">
              <Text>Balance</Text>
              <Text size="md">
                {formatCurrency(balance.income - balance.expenses)}
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card
              shadow="md"
              style={{
                background: theme.colors['green'][3],
              }}
            >
              <Text>Ingresos</Text>
              <Text size="md">{formatCurrency(balance.income)}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card
              shadow="md"
              style={{
                background: theme.colors['red'][3],
              }}
            >
              <Text>Egresos</Text>
              <Text size="md">{formatCurrency(balance.expenses)}</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Card>
      <Space />
      <Table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Fecha</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          {operations.map((op) => (
            <tr key={op.id}>
              <td>{op.description}</td>
              <td>{dayjs(op.date).format('dddd, MMMM D, YYYY hh:mm')}</td>
              <td>{formatCurrency(op.amount)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Stack>
  );
};
