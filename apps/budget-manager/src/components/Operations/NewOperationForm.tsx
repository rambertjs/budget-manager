import { TextInput, Group, NumberInput, Button, Select } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

const schema = z.object({
  date: z.date(),
  time: z.string().regex(/^([01][0-9]|2[0-3]):([0-5][0-9])$/),
  description: z.string().max(20, 'Usá una descripción más corta'),
  amount: z.number(),
  type: z.enum(['INGRESO', 'EGRESO']),
});
export type NewOperationFormData = z.infer<typeof schema>;

export const NewOperationForm = ({
  onSubmit,
}: {
  onSubmit: (data: NewOperationFormData) => void;
}) => {
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
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
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
  );
};
