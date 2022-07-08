import {
  Button,
  Center,
  Group,
  NumberInput,
  Select,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { Operation } from '@alkemy-fullstack/prisma-client';
import { DatePicker, TimeInput } from '@mantine/dates';
import 'dayjs/locale/es';
import { useForm, zodResolver } from '@mantine/form';
import dayjs from 'dayjs';

import { z } from 'zod';
const schema = z.object({
  date: z.date(),
  time: z.string().regex(/^([01][0-9]|2[0-3]):([0-5][0-9])$/),
  description: z.string().max(20, 'Usá una descripción más corta'),
  amount: z.number(),
  type: z.enum(['INGRESO', 'EGRESO']),
});
type FormData = z.infer<typeof schema>;

export const NewOperation = () => {
  const form = useForm({
    initialValues: {
      date: new Date(),
      time: '00:00',
      description: '',
      amount: 0,
      type: 'INGRESO' as const,
    },
    schema: zodResolver(schema),
  });

  const handleSubmit = (values: FormData) => {
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
    });
  };
  return (
    <Center sx={{ height: '100%' }}>
      <Stack>
        <Title order={2}>Registrar una nueva operación</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            required
            label="Concepto"
            {...form.getInputProps('description')}
            mt="md"
          />
          <Group grow mt="md">
            <DatePicker
              label="Fecha"
              required
              locale="es"
              {...form.getInputProps('date')}
            />
            <TimeInput label="Hora" />
          </Group>
          <Select
            required
            label="Tipo"
            data={[
              { value: 'INGRESO', label: 'Ingreso' },
              { value: 'EGRESO', label: 'Egreso' },
            ]}
            mt="md"
          />
          <NumberInput
            required
            hideControls
            label="Importe"
            parser={(value = '') => value.replace(/\$\s?|(,*)/g, '')}
            formatter={(value = '') =>
              !Number.isNaN(parseFloat(value || ''))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : '$ '
            }
            precision={2}
            {...form.getInputProps('amount')}
            mt="md"
          />
          <Group position="right" mt="md">
            <Button type="submit">Registrar</Button>
          </Group>
        </form>
      </Stack>
    </Center>
  );
};
