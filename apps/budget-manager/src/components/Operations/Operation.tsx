import { Group, Text } from '@mantine/core';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useDeleteOperation } from '../../hooks/useDeleteOperation';
import { IOperation } from '../../hooks/useOperations';
import { useUpdateOperation } from '../../hooks/useUpdateOperation';
import { formatCurrency } from '../../utils/formatCurrency';
import { DeleteButton } from './Buttons/DeleteButton';
import { EditButton } from './Buttons/EditButton';
import { DeleteOperationModal } from './Modals/DeleteOperationModal';
import { EditOperationModal } from './Modals/EditOperationModal';

export const Operation = ({ op }: { op: IOperation }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const deleteOperationMutation = useDeleteOperation(op.id);
  const updateOperationMutation = useUpdateOperation(op.id);

  const handleDelete = () => {
    setDeleteModalOpen(false);
    deleteOperationMutation.mutate();
  };
  const handleEdit = (editedOp: Partial<IOperation>) => {
    setEditModalOpen(false);
    updateOperationMutation.mutate(editedOp);
  };

  return (
    <>
      <DeleteOperationModal
        closeModal={() => setDeleteModalOpen(false)}
        isOpen={deleteModalOpen}
        onClick={handleDelete}
      />
      <EditOperationModal
        closeModal={() => setEditModalOpen(false)}
        isOpen={editModalOpen}
        op={op}
        onSubmit={handleEdit}
      />
      <tr>
        <td>{op.description}</td>
        <td>{dayjs(op.date).format('dddd, MMMM D, YYYY HH:mm')}</td>
        <td>
          <Text color={op.type === 'INGRESO' ? 'green' : 'red'}>
            {formatCurrency(op.amount)}
          </Text>
        </td>
        <td>
          <Group>
            <DeleteButton onClick={() => setDeleteModalOpen(true)} />
            <EditButton onClick={() => setEditModalOpen(true)} />
          </Group>
        </td>
      </tr>
    </>
  );
};
