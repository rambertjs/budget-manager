import { ThemeIcon, UnstyledButton } from '@mantine/core';
import { Trash } from 'tabler-icons-react';

export const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <UnstyledButton onClick={onClick}>
      <ThemeIcon color="red">
        <Trash />
      </ThemeIcon>
    </UnstyledButton>
  );
};
