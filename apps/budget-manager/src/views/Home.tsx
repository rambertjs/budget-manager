import { Stack, Card, Grid, useMantineTheme, Title } from '@mantine/core';
import { BalanceCard } from '../components/BalanceCard';
import { OperationsTable } from '../components/Operations/OperationsTable';
import { useBalance } from '../hooks/useBalance';
import { useOperations } from '../hooks/useOperations';

export const Home = () => {
  const theme = useMantineTheme();
  const { operations } = useOperations(1);
  const { balance } = useBalance();

  return (
    <Stack spacing="xl">
      <Card shadow="md">
        <Grid styles={{ width: '100%' }}>
          <Grid.Col>
            <BalanceCard
              title="Balance"
              currency={balance.income - balance.expenses}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <BalanceCard
              style={{
                background: theme.colors['green'][3],
              }}
              title="Ingresos"
              currency={balance.income}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <BalanceCard
              style={{
                background: theme.colors['red'][3],
              }}
              title="Egresos"
              currency={balance.expenses}
            />
          </Grid.Col>
        </Grid>
      </Card>
      <Title order={2}>Operaciones recientes</Title>
      <OperationsTable operations={operations} />
    </Stack>
  );
};
