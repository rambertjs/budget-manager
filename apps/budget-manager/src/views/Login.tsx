import { Center, Title, Stack, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/Auth/LoginForm';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

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
          <LoginForm onSubmit={handleSubmit} />
        </Stack>
      </Card>
    </Center>
  );
};
