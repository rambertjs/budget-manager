import { Center, Title, Stack, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/Auth/UserForm';
import { useAuth } from '../hooks/useAuth';

export const Register = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    auth.register(email, password).then(() => navigate('/login'));
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
          <Title order={2}>Crear cuenta</Title>
          <UserForm onSubmit={handleSubmit} type="register" />
        </Stack>
      </Card>
    </Center>
  );
};
