import { LoadingOverlay, Pagination, Stack } from '@mantine/core';
import { useState } from 'react';
import { OperationsTable } from '../components/Operations/OperationsTable';
import { useOperations } from '../hooks/useOperations';

export const AllOperations = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useOperations(page);

  return (
    <div>
      <h1>Todas las operaciones</h1>
      <Stack sx={{ position: 'relative' }}>
        <LoadingOverlay visible={isFetching} />
        <OperationsTable operations={data?.operations || []} />
        <Pagination
          page={page}
          total={data?.totalPages || 1}
          onChange={setPage}
        />
      </Stack>
    </div>
  );
};
