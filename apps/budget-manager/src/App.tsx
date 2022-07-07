import {
  AppShell,
  Container,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppHeader } from './components/AppHeader';
import { AppNavbar } from './components/AppNavbar';

import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { Outlet } from 'react-router-dom';
dayjs.locale('es');

export const App = () => {
  const [isNavbarOpen, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

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
          <Outlet />
        </Container>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
