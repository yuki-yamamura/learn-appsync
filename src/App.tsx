import { gql, useQuery, useSubscription } from "@apollo/client";

type Todo = {
  id: string;
  name: string;
  when: string;
  where: string;
  description: string;
};

const CREATE_TODO_SUBSCRIPTION = gql`
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      when
      where
      description
    }
  }
`;

const GET_TODOS = gql`
  query listTodos {
    listTodos {
      items {
        id
        name
        when
        where
        description
      }
    }
  }
`;

function App() {
  const { data: createSubData, error: createSubError } = useSubscription(
    CREATE_TODO_SUBSCRIPTION
  );
  const { data: todos, loading } = useQuery(GET_TODOS);

  if (createSubError) {
    console.error({ createSubError });

    return <div>Something went wrong.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log({ createSubData });

  return (
    <>
      <ul>
        {(todos.listTodos.items as Todo[]).map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
          </li>
        ))}
      </ul>
      <div>{createSubData?.onCreateTodo?.name ?? "hogehoge"}</div>
    </>
  );
}

export default App;
