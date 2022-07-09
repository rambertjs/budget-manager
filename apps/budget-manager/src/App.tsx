import { AppShell, Container, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppHeader } from './components/App/AppHeader';
import { AppNavbar } from './components/App/AppNavbar';

import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { Outlet } from 'react-router-dom';
dayjs.locale('es');

export const App = () => {
  const [isNavbarOpen, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
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
      <Container sx={{ height: '100%' }}>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default App;
