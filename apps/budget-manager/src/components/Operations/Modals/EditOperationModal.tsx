import {
  Button,
  Group,
  Modal,
  NumberInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { IOperation } from '../../../hooks/useOperations';
import { z } from 'zod';

const schema = z.object({
  description: z.string(),
  date: z.date(),
  time: z.date(),
  amount: z.number(),
});

export const EditOperationModal = ({
  isOpen,
  closeModal,
  op,
  onSubmit,
}: {
  isOpen: boolean;
  closeModal: () => void;
  op: IOperation;
  onSubmit: (op: Omit<IOperation, 'id' | 'type'>) => void;
}) => {
  const date = new Date(op.date);
  const form = useForm({
    initialValues: {
      description: op.description,
      amount: op.amount,
      date: date,
      time: date,
    },
    schema: zodResolver(schema),
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    const { description } = values;
    const amount = values.amount * 100;
    const date = values.date;
    date.setHours(values.time.getHours());
    date.setMinutes(values.time.getMinutes());
    onSubmit({ description, amount, date: date.toISOString() });
  };

  const handleClose = () => {
    form.reset();
    closeModal();
  };

  return (
    <Modal opened={isOpen} onClose={handleClose} withCloseButton={false}>
      <Stack>
        <Title>Editar operación</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack spacing="md">
            <TextInput
              required
              label="Concepto"
              {...form.getInputProps('description')}
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
              value={form.values.amount / 100}
            />
            <DatePicker label="Fecha" {...form.getInputProps('date')} />
            <TimeInput label="Hora" {...form.getInputProps('time')} />
            <Group>
              <Button color="red" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit">Guardar</Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </Modal>
  );
};
