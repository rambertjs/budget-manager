import { Operation } from '@alkemy-fullstack/api-interfaces';
import { Table } from '@mantine/core';
import dayjs from 'dayjs';
import { formatCurrency } from '../utils/formatCurrency';

export const OperationsTable = ({
  operations,
}: {
  operations: Operation[];
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Fecha</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {operations.map((op) => (
          <tr key={op.id}>
            <td>{op.description}</td>
            <td>{dayjs(op.date).format('dddd, MMMM D, YYYY hh:mm')}</td>
            <td>{formatCurrency(op.amount)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
