import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import App from './App';
import { Home } from './views/Home';
import { NewOperation } from './views/NewOperation';
import { Login } from './views/Login';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { AllOperations } from './views/AllOperations';
import { Register } from './views/Register';

const client = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers = config.headers ?? {};
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

root.render(
  <StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <App />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="new" element={<NewOperation />} />
              <Route path="all" element={<AllOperations />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
