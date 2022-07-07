import {
  AppShell,
  Card,
  Container,
  Grid,
  MantineProvider,
  Space,
  Stack,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppHeader } from './components/AppHeader';
import { AppNavbar } from './components/AppNavbar';
import { useOperations } from './hooks/useOperations';
import { formatCurrency } from './utils/formatCurrency';

import 'dayjs/locale/es';
import dayjs from 'dayjs';
dayjs.locale('es');

export const App = () => {
  const [isNavbarOpen, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { operations, balance } = useOperations({
    withBalance: true,
    take: 10,
  });

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <AppShell
        padding="md"
        navbar={<AppNavbar isOpen={isNavbarOpen} />}
        navbarOffsetBreakpoint="sm"
        header={<AppHeader toggleNavbar={toggle} burgerStatus={isNavbarOpen} />}
        fixed
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors['dark'][8]
                : theme.colors['gray'][0],
          },
        }}
      >
        <Container>
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
        </Container>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
