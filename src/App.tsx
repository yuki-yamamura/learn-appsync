import { gql, useSubscription } from "@apollo/client";
import { client } from "./lib/apollo/client";
import { useState, useEffect } from "react";

type Todo = {
  id: string;
  name: string;
  when: string;
  where: string;
  description: string;
};

const CREATE_TODO_SUBSCRIPTION = gql`
  subscription OnCreateTodo {
    createTodo {
      id
      name
      where
      when
      description
    }
  }
`;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { data: createSubData, error: createSubError } = useSubscription(
    CREATE_TODO_SUBSCRIPTION
  );

  console.log({ createSubData });

  useEffect(() => {
    client
      .query({
        query: gql`
          query {
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
        `,
      })
      .then((result) => {
        setTodos(result.data.listTodos.items);
      });
  }, []);

  if (createSubError) {
    console.error({ createSubError });

    return <div>Something went wrong.</div>;
  }

  return (
    <>
      <div>{createSubData}</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
