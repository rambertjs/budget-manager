import { Group } from '@mantine/core';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useMutation } from 'react-query';
import {
  deleteOperation,
  IOperation,
  updateOperation,
} from '../../react-query/operations';
import { formatCurrency } from '../../utils/formatCurrency';
import { DeleteButton } from './Buttons/DeleteButton';
import { EditButton } from './Buttons/EditButton';
import { DeleteOperationModal } from './Modals/DeleteOperationModal';
import { EditOperationModal } from './Modals/EditOperationModal';

export const Operation = ({ op }: { op: IOperation }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const deleteOperationMutation = useMutation(deleteOperation);

  const handleDelete = () => {
    setDeleteModalOpen(false);
    deleteOperationMutation.mutate(op.id);
  };
  const handleEdit = (editedOp: Partial<IOperation>) => {
    setEditModalOpen(false);
    updateOperation(op.id, editedOp);
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
        <td>{dayjs(op.date).format('dddd, MMMM D, YYYY hh:mm')}</td>
        <td>{formatCurrency(op.amount)}</td>
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
