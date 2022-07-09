import { Stack, Card, Grid, useMantineTheme, Title } from '@mantine/core';
import { useQuery } from 'react-query';
import { BalanceCard } from '../components/Balance/BalanceCard';
import { OperationsTable } from '../components/Operations/OperationsTable';
import { getBalance } from '../react-query/balance';
import { getOperations } from '../react-query/operations';

export const Home = () => {
  const theme = useMantineTheme();
  const { data: operationsData, isSuccess: isOperationsSuccess } = useQuery(
    ['operations', 1],
    () => getOperations(1)
  );
  const { data: balanceData, isSuccess: isBalanceSuccess } = useQuery(
    'balance',
    () => getBalance()
  );

  return (
    <Stack spacing="xl">
      {isOperationsSuccess && isBalanceSuccess && (
        <>
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
          <Title order={2}>Operaciones recientes</Title>
          <OperationsTable operations={operationsData.operations} />
        </>
      )}
    </Stack>
  );
};
