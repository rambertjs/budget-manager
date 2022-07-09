import { Table } from '@mantine/core';
import { IOperation } from '../../hooks/useOperations';
import { Operation } from './Operation';

export const OperationsTable = ({
  operations,
}: {
  operations: IOperation[];
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Fecha</th>
          <th>Importe</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {operations.map((op) => (
          <Operation key={op.id} op={op} />
        ))}
      </tbody>
    </Table>
  );
};
