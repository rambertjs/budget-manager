import { Center, Stack, Title } from '@mantine/core';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import {
  NewOperationForm,
  NewOperationFormData,
} from '../components/NewOperationForm';

export const NewOperation = () => {
  const handleSubmit = (values: NewOperationFormData) => {
    const { description, type } = values;
    const [hour, minutes] = values.time.split(':');
    const date = dayjs(values.date)
      .hour(+hour)
      .minute(+minutes)
      .toISOString();
    const amount = values.amount * 100;

    fetch('/api/operations', {
      method: 'POST',
      body: JSON.stringify({ date, description, amount, type }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw res.json();
      })
      .catch(console.error);
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
