import { useEffect } from 'react';
import {
  useListTodosQuery,
  useOnCreateTodoSubscription,
} from '../graphql/generated';

function App() {
  const { data, loading, client } = useListTodosQuery();
  const { data: data2 } = useOnCreateTodoSubscription();

  useEffect(() => {
    client.resetStore();
  }, [data2, client]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data?.listTodos?.items) {
    return null;
  }

  console.log({ data });

  return (
    <>
      <ul>
        {data.listTodos.items.map((todo) => (
          <li key={todo?.id}>
            <span>{todo?.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
