import { Burger, Header, MediaQuery, Title } from '@mantine/core';

interface Props {
  toggleNavbar: () => void;
  burgerStatus: boolean;
}

export const AppHeader = ({ toggleNavbar, burgerStatus }: Props) => {
  return (
    <Header height={75} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={burgerStatus}
            onClick={() => toggleNavbar()}
            mr="xl"
          />
        </MediaQuery>
        <img src="assets/logo.png" alt="" style={{ maxHeight: '100%' }} />
        <Title px={15} styles={(theme) => ({ color: theme.colors['gray'][7] })}>
          Tu Presupuesto
        </Title>
      </div>
    </Header>
  );
};
