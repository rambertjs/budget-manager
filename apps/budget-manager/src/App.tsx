import { useOperations } from './hooks/useOperations';

export const App = () => {
  const operations = useOperations();
  return (
    <>
      <h1>Operations</h1>
      <ul>
        {operations.map((op) => (
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
