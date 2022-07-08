import { Group, Navbar, ThemeIcon, Text, Button } from '@mantine/core';
import { type ReactNode } from 'react';
import { Plus } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

interface Props {
  isOpen: boolean;
}

export const AppNavbar = ({ isOpen }: Props) => {
  return (
    <Navbar
      width={{ sm: 200, lg: 300 }}
      p="md"
      hidden={!isOpen}
      hiddenBreakpoint="sm"
    >
      <NavbarItem icon={<Plus />} text="Nueva operación" />
    </Navbar>
  );
};

interface ItemProps {
  icon: ReactNode;
  text: string;
}
const NavbarItem = ({ icon, text }: ItemProps) => (
  <Button variant="default" sx={{ border: 0 }} component={Link} to="/new">
    <Group>
      <ThemeIcon color="blue" variant="light">
        {icon}
      </ThemeIcon>
      <Text size="sm">{text}</Text>
    </Group>
  </Button>
);
