import { Operacion as DBOperacion } from '@alkemy-fullstack/prisma-client';
import { useEffect, useState } from 'react';

type Operacion = Omit<DBOperacion, 'fecha'> & { fecha: string };

export const useOperaciones = () => {
  const [operaciones, setOperaciones] = useState<Operacion[]>([]);

  useEffect(() => {
    fetch('/api/operaciones')
      .then((res) => res.json())
      .then(setOperaciones);
  }, []);

  return operaciones;
};
