import { Group } from '@mantine/core';
import dayjs from 'dayjs';
import { IOperation } from '../../hooks/useOperations';
import { formatCurrency } from '../../utils/formatCurrency';
import { DeleteButton } from '../Buttons/DeleteButton';
import { EditButton } from '../Buttons/EditButton';

export const Operation = ({ op }: { op: IOperation }) => {
  return (
    <tr key={op.id}>
      <td>{op.description}</td>
      <td>{dayjs(op.date).format('dddd, MMMM D, YYYY hh:mm')}</td>
      <td>{formatCurrency(op.amount)}</td>
      <td>
        <Group>
          <DeleteButton
            onClick={() => {
              void 0;
            }}
          />
          <EditButton
            onClick={() => {
              void 0;
            }}
          />
        </Group>
      </td>
    </tr>
  );
};
