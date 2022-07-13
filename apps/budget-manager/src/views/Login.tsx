import {
  Center,
  Title,
  Stack,
  TextInput,
  Card,
  Button,
  Group,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
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

  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    auth.login(email, password).then(() => navigate('/'));
  };
  return (
    <Center
      sx={(theme) => ({
        height: '100%',
        backgroundColor: theme.colors['dark'][2],
      })}
    >
      <Card shadow="xl" sx={{ width: '40ch' }}>
        <Stack p={'xl'}>
          <Title order={2}>Iniciar sesión</Title>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Email"
                type="email"
                {...form.getInputProps('email')}
              />
              <TextInput
                label="Password"
                type="password"
                {...form.getInputProps('password')}
              />
              <Group>
                <Button type="submit">Iniciar sesión</Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Center>
  );
};
