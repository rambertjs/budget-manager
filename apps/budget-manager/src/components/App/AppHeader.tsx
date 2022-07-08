import {
  Burger,
  Group,
  Header,
  MediaQuery,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { Link } from 'react-router-dom';

interface Props {
  toggleNavbar: () => void;
  burgerStatus: boolean;
}

export const AppHeader = ({ toggleNavbar, burgerStatus }: Props) => {
  return (
    <Header height={75} p="md">
      <Group sx={{ height: '100%' }}>
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
            <Title px={15} sx={(theme) => ({ color: theme.colors['gray'][7] })}>
              Tu Presupuesto
            </Title>
          </Group>
        </UnstyledButton>
      </Group>
    </Header>
  );
};
