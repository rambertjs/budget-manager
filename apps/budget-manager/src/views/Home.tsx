import { Stack, Card, Grid, useMantineTheme, Title } from '@mantine/core';
import { useQuery } from 'react-query';
import { BalanceCard } from '../components/Balance/BalanceCard';
import { OperationsTable } from '../components/Operations/OperationsTable';
import { useBalance } from '../hooks/useBalance';
import { useOperations } from '../hooks/useOperations';

export const Home = () => {
  const theme = useMantineTheme();
  const { data: operationsData, status: operationsStatus } = useOperations();
  const { data: balanceData, status: balanceStatus } = useBalance();

  return (
    <Stack spacing="xl">
      {balanceStatus === 'loading' ? (
        'Loading...'
      ) : balanceStatus === 'error' ? (
        <span>Errored.</span>
      ) : (
        balanceStatus === 'success' && (
          <Card shadow="md">
            <Grid styles={{ width: '100%' }}>
              <Grid.Col>
                <BalanceCard title="Balance" currency={balanceData?.balance} />
              </Grid.Col>
              <Grid.Col span={6}>
                <BalanceCard
                  style={{
                    background: theme.colors['green'][3],
                  }}
                  title="Ingresos"
                  currency={balanceData?.income}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <BalanceCard
                  style={{
                    background: theme.colors['red'][3],
                  }}
                  title="Egresos"
                  currency={balanceData?.expenses}
                />
              </Grid.Col>
            </Grid>
          </Card>
        )
      )}
      <Title order={2}>Operaciones recientes</Title>
      {operationsStatus === 'loading' ? (
        'Loading...'
      ) : operationsStatus === 'error' ? (
        <span>Errored.</span>
      ) : (
        operationsStatus === 'success' && (
          <OperationsTable operations={operationsData.operations} />
        )
      )}
    </Stack>
  );
};
