import { Button, Group, Stack } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { UserInput } from './UserInput';

export const LoginForm = ({
  onSubmit,
}: {
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
}) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    schema: zodResolver(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    ),
  });
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <UserInput
          userFieldProps={form.getInputProps('email')}
          passwordFieldProps={form.getInputProps('password')}
        />
        <Group>
          <Button type="submit">Iniciar sesión</Button>
        </Group>
      </Stack>
    </form>
  );
};
