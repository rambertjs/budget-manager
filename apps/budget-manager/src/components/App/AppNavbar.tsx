import { Group, Navbar, ThemeIcon, Text, Button } from '@mantine/core';
import { type ReactNode } from 'react';
import { List, Plus } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

interface Props {
  isOpen: boolean;
}

export const AppNavbar = ({ isOpen }: Props) => {
  return (
    <Navbar
      width={{ sm: 200, md: 300 }}
      p="md"
      hidden={!isOpen}
      hiddenBreakpoint="sm"
    >
      <NavbarItem icon={<Plus />} text="Nueva operación" to="new" />
      <NavbarItem icon={<List />} text="Operaciones" to="all" />
    </Navbar>
  );
};

interface ItemProps {
  icon: ReactNode;
  text: string;
  to: string;
}
const NavbarItem = ({ icon, text, to }: ItemProps) => (
  <Button variant="default" sx={{ border: 0 }} component={Link} to={to}>
    <Group>
      <ThemeIcon color="blue" variant="light">
        {icon}
      </ThemeIcon>
      <Text size="sm">{text}</Text>
    </Group>
  </Button>
);
