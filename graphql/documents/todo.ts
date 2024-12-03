import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query listTodos {
    listTodos {
      items {
        id
        title
        who
        when
        description
      }
    }
  }
`;

export const ON_CREATE_TODO = gql`
  subscription onCreateTodo {
    onCreateTodo {
      id
      title
      who
      when
      description
    }
  }
`;
