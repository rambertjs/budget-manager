import { TextInput, Group, NumberInput, Button, Select } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { IOperation } from '../../../hooks/useOperations';
import { z } from 'zod';

const schema = z.object({
  date: z.date(),
  time: z.date(),
  description: z.string().max(20, 'Usá una descripción más corta'),
  amount: z.number(),
  type: z.enum(['INGRESO', 'EGRESO']),
});
export type NewOperationFormData = z.infer<typeof schema>;

export const NewOperationForm = ({
  onSubmit,
}: {
  onSubmit: (op: Partial<IOperation>) => void;
}) => {
  const date = new Date();
  const form = useForm({
    initialValues: {
      date: date,
      time: date,
      description: '',
      amount: 0,
      type: 'INGRESO' as const,
    },
    schema: zodResolver(schema),
  });

  const handleSubmit = (values: NewOperationFormData) => {
    const { description, type } = values;
    const amount = values.amount * 100;
    const date = values.date;
    date.setHours(values.time.getHours());
    date.setMinutes(values.time.getMinutes());
    onSubmit({ type, description, amount, date: date.toISOString() });
  };

  return (
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
        <TimeInput label="Hora" {...form.getInputProps('time')} />
      </Group>
      <Select
        required
        label="Tipo"
        data={[
          { value: 'INGRESO', label: 'Ingreso' },
          { value: 'EGRESO', label: 'Egreso' },
        ]}
        mt="md"
        {...form.getInputProps('type')}
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
  );
};
