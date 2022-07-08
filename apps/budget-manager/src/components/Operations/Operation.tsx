import { Button, Group, Modal, Stack, Text, Title } from '@mantine/core';

import dayjs from 'dayjs';
import { useState } from 'react';
import { IOperation } from '../../hooks/useOperations';
import { formatCurrency } from '../../utils/formatCurrency';
import { DeleteButton } from '../Buttons/DeleteButton';
import { EditButton } from '../Buttons/EditButton';
import { DeleteOperationModal } from '../Modals/DeleteOperationModal';

export const Operation = ({ op }: { op: IOperation }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = () => console.log('NOT IMPLEMENTED');
  return (
    <>
      <DeleteOperationModal
        closeModal={() => setDeleteModalOpen(false)}
        isOpen={deleteModalOpen}
        onClick={handleDelete}
      />
      <tr key={op.id}>
        <td>{op.description}</td>
        <td>{dayjs(op.date).format('dddd, MMMM D, YYYY hh:mm')}</td>
        <td>{formatCurrency(op.amount)}</td>
        <td>
          <Group>
            <DeleteButton onClick={() => setDeleteModalOpen(true)} />
            <EditButton
              onClick={() => {
                void 0;
              }}
            />
          </Group>
        </td>
      </tr>
    </>
  );
};
