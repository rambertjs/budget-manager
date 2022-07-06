import { Operacion } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

export const useOperaciones = () => {
  const [operaciones, setOperaciones] = useState<Operacion[]>([]);

  useEffect(() => {
    fetch('/api/operaciones')
      .then((res) => res.json())
      .then(setOperaciones);
  }, []);

  return operaciones;
};
