import { Center, Stack, Title } from '@mantine/core';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import {
  NewOperationForm,
  NewOperationFormData,
} from '../components/Operations/NewOperationForm';
import { useCreateOperation } from '../hooks/useCreateOperation';
import { Type } from '@alkemy-fullstack/prisma-client';

export const NewOperation = () => {
  const createOperationMutation = useCreateOperation();
  const handleSubmit = (values: NewOperationFormData) => {
    const { description, type } = values;
    const [hour, minutes] = values.time.split(':');
    const date = dayjs(values.date)
      .hour(+hour)
      .minute(+minutes)
      .toISOString();
    const amount = values.amount * 100;
    const operation = { description, type: type as Type, amount, date };
    createOperationMutation.mutate(operation);
  };
  return (
    <Center sx={{ height: '100%' }}>
      <Stack>
        <Title order={2}>Registrar una nueva operación</Title>
        <NewOperationForm onSubmit={handleSubmit} />
      </Stack>
    </Center>
  );
};
