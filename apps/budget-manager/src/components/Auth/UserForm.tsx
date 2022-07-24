import { Anchor, Button, Group, Stack } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { UserInput } from './UserInput';

export const UserForm = ({
  onSubmit,
  type,
}: {
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
  type: 'login' | 'register';
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
        {type === 'login' && (
          <Anchor component={Link} to="/register">
            No tienes cuenta? Crea una ahora.
          </Anchor>
        )}
        <Group>
          <Button type="submit">
            {type === 'login' ? 'Iniciar sesión' : 'Registrar'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
