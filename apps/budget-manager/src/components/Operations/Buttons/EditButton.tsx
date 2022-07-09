import { ThemeIcon, UnstyledButton } from '@mantine/core';
import { Pencil } from 'tabler-icons-react';

export const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <UnstyledButton onClick={onClick}>
      <ThemeIcon color="yellow">
        <Pencil />
      </ThemeIcon>
    </UnstyledButton>
  );
};
