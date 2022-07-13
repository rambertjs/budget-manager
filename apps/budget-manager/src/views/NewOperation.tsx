import { Center, Stack, Title } from '@mantine/core';
import { NewOperationForm } from '../components/Operations/Forms/NewOperationForm';
import { useCreateOperation } from '../hooks/useCreateOperation';
import { IOperation } from '../hooks/useOperations';

export const NewOperation = () => {
  const createOperationMutation = useCreateOperation();
  const onSubmit = (data: Partial<IOperation>) => {
    createOperationMutation.mutate(data);
  };
  return (
    <Center sx={{ height: '100%' }}>
      <Stack>
        <Title order={2}>Registrar una nueva operación</Title>
        <NewOperationForm onSubmit={onSubmit} />
      </Stack>
    </Center>
  );
};
