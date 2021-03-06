import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  events: Array<Event>;
  event?: Maybe<Event>;
  me?: Maybe<User>;
  questions: PaginatedQuestions;
  question?: Maybe<Question>;
};


export type QueryEventsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryEventArgs = {
  id: Scalars['Float'];
};


export type QueryQuestionsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  eventId: Scalars['Int'];
};


export type QueryQuestionArgs = {
  id: Scalars['Float'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  code: Scalars['String'];
  creatorId: Scalars['Float'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedQuestions = {
  __typename?: 'PaginatedQuestions';
  questions: Array<Question>;
  hasMore: Scalars['Boolean'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['Float'];
  authorName: Scalars['String'];
  description: Scalars['String'];
  points: Scalars['Float'];
  eventId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  updateEvent?: Maybe<Event>;
  deleteEvent: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  createQuestion: Question;
  updateQuestion?: Maybe<Question>;
  deleteQuestion: Scalars['Boolean'];
  vote: Scalars['Boolean'];
};


export type MutationCreateEventArgs = {
  input: EventInput;
};


export type MutationUpdateEventArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateQuestionArgs = {
  input: QuestionInput;
};


export type MutationUpdateQuestionArgs = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['Int'];
};


export type MutationVoteArgs = {
  value: Scalars['Int'];
  questionId: Scalars['Int'];
};

export type EventInput = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type QuestionInput = {
  eventId: Scalars['Float'];
  authorName: Scalars['String'];
  description: Scalars['String'];
};

export type ErrorDataFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type QuestionSnippetFragment = (
  { __typename?: 'Question' }
  & Pick<Question, 'id' | 'authorName' | 'description' | 'points' | 'createdAt' | 'updatedAt'>
);

export type UserDataFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorDataFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserDataFragment
    )> }
  ) }
);

export type CreateEventMutationVariables = Exact<{
  input: EventInput;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'code' | 'creatorId'>
  ) }
);

export type CreateQuestionMutationVariables = Exact<{
  input: QuestionInput;
}>;


export type CreateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { createQuestion: (
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'createdAt' | 'updatedAt' | 'authorName' | 'description' | 'points'>
  ) }
);

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteQuestionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteQuestion'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorDataFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserDataFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorDataFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserDataFragment
    )> }
  ) }
);

export type VoteMutationVariables = Exact<{
  value: Scalars['Int'];
  questionId: Scalars['Int'];
}>;


export type VoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'vote'>
);

export type EventsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'createdAt' | 'updatedAt' | 'title'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserDataFragment
  )> }
);

export type QuestionsQueryVariables = Exact<{
  eventId: Scalars['Int'];
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type QuestionsQuery = (
  { __typename?: 'Query' }
  & { questions: (
    { __typename?: 'PaginatedQuestions' }
    & Pick<PaginatedQuestions, 'hasMore'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & QuestionSnippetFragment
    )> }
  ) }
);

export const ErrorDataFragmentDoc = gql`
    fragment ErrorData on FieldError {
  field
  message
}
    `;
export const QuestionSnippetFragmentDoc = gql`
    fragment QuestionSnippet on Question {
  id
  authorName
  description
  points
  createdAt
  updatedAt
}
    `;
export const UserDataFragmentDoc = gql`
    fragment UserData on User {
  id
  email
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      ...ErrorData
    }
    user {
      ...UserData
    }
  }
}
    ${ErrorDataFragmentDoc}
${UserDataFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateEventDocument = gql`
    mutation CreateEvent($input: EventInput!) {
  createEvent(input: $input) {
    id
    createdAt
    updatedAt
    title
    description
    code
    creatorId
  }
}
    `;

export function useCreateEventMutation() {
  return Urql.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument);
};
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($input: QuestionInput!) {
  createQuestion(input: $input) {
    id
    createdAt
    updatedAt
    authorName
    description
    points
  }
}
    `;

export function useCreateQuestionMutation() {
  return Urql.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument);
};
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($id: Int!) {
  deleteQuestion(id: $id)
}
    `;

export function useDeleteQuestionMutation() {
  return Urql.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      ...ErrorData
    }
    user {
      ...UserData
    }
  }
}
    ${ErrorDataFragmentDoc}
${UserDataFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: RegisterInput!) {
  register(options: $options) {
    errors {
      ...ErrorData
    }
    user {
      ...UserData
    }
  }
}
    ${ErrorDataFragmentDoc}
${UserDataFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const VoteDocument = gql`
    mutation Vote($value: Int!, $questionId: Int!) {
  vote(value: $value, questionId: $questionId)
}
    `;

export function useVoteMutation() {
  return Urql.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument);
};
export const EventsDocument = gql`
    query Events($limit: Int!, $cursor: String) {
  events(cursor: $cursor, limit: $limit) {
    id
    createdAt
    updatedAt
    title
  }
}
    `;

export function useEventsQuery(options: Omit<Urql.UseQueryArgs<EventsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EventsQuery>({ query: EventsDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const QuestionsDocument = gql`
    query Questions($eventId: Int!, $limit: Int!, $cursor: String) {
  questions(eventId: $eventId, cursor: $cursor, limit: $limit) {
    hasMore
    questions {
      ...QuestionSnippet
    }
  }
}
    ${QuestionSnippetFragmentDoc}`;

export function useQuestionsQuery(options: Omit<Urql.UseQueryArgs<QuestionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<QuestionsQuery>({ query: QuestionsDocument, ...options });
};