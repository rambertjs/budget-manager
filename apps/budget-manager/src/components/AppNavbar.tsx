import { Navbar } from '@mantine/core';

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
      {/* Navbar content */}
    </Navbar>
  );
};
