import { Modal, Stack, Title } from '@mantine/core';
import { IOperation } from '../../../hooks/useOperations';
import { EditOperationForm } from '../Forms/EditOperationForm';

export const EditOperationModal = ({
  isOpen,
  closeModal,
  op,
  onSubmit,
}: {
  isOpen: boolean;
  closeModal: () => void;
  op: IOperation;
  onSubmit: (op: Partial<IOperation>) => void;
}) => {
  return (
    <Modal opened={isOpen} onClose={closeModal} withCloseButton={false}>
      <Stack>
        <Title>Editar operación</Title>
        <EditOperationForm
          onSubmit={onSubmit}
          isOpen={isOpen}
          op={op}
          closeForm={closeModal}
        />
      </Stack>
    </Modal>
  );
};
