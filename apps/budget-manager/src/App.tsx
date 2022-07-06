import { useOperaciones } from './hooks/useOperaciones';

export const App = () => {
  const operaciones = useOperaciones();
  return (
    <>
      <h1>Operaciones</h1>
      <ul>
        {operaciones.map((op) => (
          <li key={op.id}>
            <span className={op.tipo} title={op.fecha}>{`$${
              op.monto / 100
            } por ${op.concepto}`}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
