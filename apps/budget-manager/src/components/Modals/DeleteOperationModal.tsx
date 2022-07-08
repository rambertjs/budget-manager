import { Button, Group, Modal, Stack, Title, Text } from '@mantine/core';

export const DeleteOperationModal = ({
  onClick,
  isOpen,
  closeModal,
}: {
  closeModal: () => void;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Modal opened={isOpen} onClose={closeModal} withCloseButton={false}>
      <Stack>
        <Title>Eliminar operación</Title>
        <Text>Esta acción es permanente y no puede deshacerse.</Text>
        <Group>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button color="red" onClick={onClick}>
            Eliminar
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
