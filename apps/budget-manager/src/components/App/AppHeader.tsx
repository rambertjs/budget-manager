import {
  Burger,
  Button,
  Group,
  Header,
  MediaQuery,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  toggleNavbar: () => void;
  burgerStatus: boolean;
}

export const AppHeader = ({ toggleNavbar, burgerStatus }: Props) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };
  return (
    <Header height={75} p="md">
      <Group sx={{ height: '100%' }} position="apart">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={burgerStatus}
            onClick={() => toggleNavbar()}
            mr="xl"
          />
        </MediaQuery>
        <UnstyledButton component={Link} to="/" style={{ height: '100%' }}>
          <Group style={{ height: '100%' }}>
            <img src="assets/logo.png" alt="" style={{ maxHeight: '100%' }} />
            <Title sx={(theme) => ({ color: theme.colors['gray'][7] })}>
              Presupuesto
            </Title>
          </Group>
        </UnstyledButton>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group ml="auto">
            {auth.user()}
            <Button variant="default" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Group>
        </MediaQuery>
      </Group>
    </Header>
  );
};
