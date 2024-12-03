import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AWSDateTime: { input: unknown; output: unknown };
};

export type CreateTodoInput = {
  description: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  when: Scalars['AWSDateTime']['input'];
  who: Array<InputMaybe<Scalars['String']['input']>>;
};

export type DeleteTodoInput = {
  id: Scalars['ID']['input'];
};

export type ModelSizeInput = {
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq: InputMaybe<Scalars['Int']['input']>;
  ge: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  le: InputMaybe<Scalars['Int']['input']>;
  lt: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  createTodo: Maybe<Todo>;
  deleteTodo: Maybe<Todo>;
  updateTodo: Maybe<Todo>;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  getTodo: Maybe<Todo>;
  listTodos: Maybe<TodoConnection>;
};

export type QueryGetTodoArgs = {
  id: Scalars['ID']['input'];
};

export type QueryListTodosArgs = {
  filter: InputMaybe<TableTodoFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextToken: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  onCreateTodo: Maybe<Todo>;
  onDeleteTodo: Maybe<Todo>;
  onUpdateTodo: Maybe<Todo>;
};

export type SubscriptionOnCreateTodoArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  when: InputMaybe<Scalars['AWSDateTime']['input']>;
  who: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnDeleteTodoArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  when: InputMaybe<Scalars['AWSDateTime']['input']>;
  who: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnUpdateTodoArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  when: InputMaybe<Scalars['AWSDateTime']['input']>;
  who: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TableBooleanFilterInput = {
  attributeExists: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableFloatFilterInput = {
  attributeExists: InputMaybe<Scalars['Boolean']['input']>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq: InputMaybe<Scalars['Float']['input']>;
  ge: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  le: InputMaybe<Scalars['Float']['input']>;
  lt: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
};

export type TableIdFilterInput = {
  attributeExists: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith: InputMaybe<Scalars['ID']['input']>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  ge: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  le: InputMaybe<Scalars['ID']['input']>;
  lt: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  size: InputMaybe<ModelSizeInput>;
};

export type TableIntFilterInput = {
  attributeExists: InputMaybe<Scalars['Boolean']['input']>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq: InputMaybe<Scalars['Int']['input']>;
  ge: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  le: InputMaybe<Scalars['Int']['input']>;
  lt: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
};

export type TableStringFilterInput = {
  attributeExists: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith: InputMaybe<Scalars['String']['input']>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  ge: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  le: InputMaybe<Scalars['String']['input']>;
  lt: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  notContains: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<ModelSizeInput>;
};

export type TableTodoFilterInput = {
  description: InputMaybe<TableStringFilterInput>;
  id: InputMaybe<TableIdFilterInput>;
  title: InputMaybe<TableStringFilterInput>;
  when: InputMaybe<TableStringFilterInput>;
  who: InputMaybe<TableStringFilterInput>;
};

export type Todo = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  when: Scalars['AWSDateTime']['output'];
  who: Array<Maybe<Scalars['String']['output']>>;
};

export type TodoConnection = {
  items: Maybe<Array<Maybe<Todo>>>;
  nextToken: Maybe<Scalars['String']['output']>;
};

export type UpdateTodoInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title: InputMaybe<Scalars['String']['input']>;
  when: InputMaybe<Scalars['AWSDateTime']['input']>;
  who: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ListTodosQueryVariables = Exact<{ [key: string]: never }>;

export type ListTodosQuery = {
  listTodos: {
    items: Array<{
      id: string;
      title: string;
      who: Array<string | null>;
      when: unknown;
      description: string | null;
    } | null> | null;
  } | null;
};

export type OnCreateTodoSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnCreateTodoSubscription = {
  onCreateTodo: {
    id: string;
    title: string;
    who: Array<string | null>;
    when: unknown;
    description: string | null;
  } | null;
};

export const ListTodosDocument = gql`
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

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListTodosQuery,
    ListTodosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(
    ListTodosDocument,
    options,
  );
}
export function useListTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListTodosQuery,
    ListTodosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(
    ListTodosDocument,
    options,
  );
}
export function useListTodosSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ListTodosQuery, ListTodosQueryVariables>(
    ListTodosDocument,
    options,
  );
}
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<
  typeof useListTodosLazyQuery
>;
export type ListTodosSuspenseQueryHookResult = ReturnType<
  typeof useListTodosSuspenseQuery
>;
export type ListTodosQueryResult = Apollo.QueryResult<
  ListTodosQuery,
  ListTodosQueryVariables
>;
export const OnCreateTodoDocument = gql`
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

/**
 * __useOnCreateTodoSubscription__
 *
 * To run a query within a React component, call `useOnCreateTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    OnCreateTodoSubscription,
    OnCreateTodoSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    OnCreateTodoSubscription,
    OnCreateTodoSubscriptionVariables
  >(OnCreateTodoDocument, options);
}
export type OnCreateTodoSubscriptionHookResult = ReturnType<
  typeof useOnCreateTodoSubscription
>;
export type OnCreateTodoSubscriptionResult =
  Apollo.SubscriptionResult<OnCreateTodoSubscription>;
