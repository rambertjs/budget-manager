import { useOperaciones } from './hooks/useOperaciones';

export const App = () => {
  const operaciones = useOperaciones();
  return (
    <>
      <h1>Operaciones</h1>
      <ul>
        {operaciones.map((op) => (
          <li key={op.id}>
            <span className={op.type} title={op.date}>{`$${
              op.amount / 100
            } por ${op.description}`}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
