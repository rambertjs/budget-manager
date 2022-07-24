import axios from 'axios';

interface IResponse {
  token: string;
  email: string;
}

export const useAuth = () => {
  const login = (email: string, password: string) => {
    return axios
      .post<IResponse>('/api/auth/login', { email, password })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
      })
      .catch(({ response: { data } }) => {
        console.error(data);
      });
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  const user = () => {
    return localStorage.getItem('email');
  };
  const register = (email: string, password: string) => {
    return axios
      .post<IResponse>('/api/auth/register', { email, password })
      .catch(({ response: { data } }) => {
        console.error(data);
      });
  };
  return { login, logout, isAuthenticated, user, register };
};
