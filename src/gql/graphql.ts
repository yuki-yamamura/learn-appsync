/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteTodoInput = {
  id: Scalars['String']['input'];
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
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
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  listTodos?: Maybe<TodoConnection>;
};


export type QueryGetTodoArgs = {
  id: Scalars['String']['input'];
};


export type QueryListTodosArgs = {
  filter?: InputMaybe<TableTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTodo?: Maybe<Todo>;
  onDeleteTodo?: Maybe<Todo>;
  onUpdateTodo?: Maybe<Todo>;
};


export type SubscriptionOnCreateTodoArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteTodoArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateTodoArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableFloatFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type TableIdFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableIntFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type TableStringFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableTodoFilterInput = {
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  when?: InputMaybe<TableStringFilterInput>;
  where?: InputMaybe<TableStringFilterInput>;
};

export type Todo = {
  __typename?: 'Todo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  when?: Maybe<Scalars['String']['output']>;
  where?: Maybe<Scalars['String']['output']>;
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  items?: Maybe<Array<Maybe<Todo>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type UpdateTodoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type HogeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HogeSubscription = { __typename?: 'Subscription', onCreateTodo?: { __typename?: 'Todo', id: string, description?: string | null } | null };

export type ListTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTodosQuery = { __typename?: 'Query', listTodos?: { __typename?: 'TodoConnection', items?: Array<{ __typename?: 'Todo', id: string, name?: string | null, when?: string | null, where?: string | null, description?: string | null } | null> | null } | null };


export const HogeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Hoge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCreateTodo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<HogeSubscription, HogeSubscriptionVariables>;
export const ListTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"when"}},{"kind":"Field","name":{"kind":"Name","value":"where"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<ListTodosQuery, ListTodosQueryVariables>;