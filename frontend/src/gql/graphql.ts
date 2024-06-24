/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any };
};

export type AuthenticatedUser = {
  __typename?: "AuthenticatedUser";
  token: Scalars["String"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  addUserToTrip: Trip;
  changeMyPassword: User;
  createReview: Review;
  createTrip: Trip;
  deleteMe: Scalars["String"]["output"];
  deleteReview: Scalars["Boolean"]["output"];
  deleteTrip: Scalars["Boolean"]["output"];
  deleteUser: Scalars["String"]["output"];
  login: AuthenticatedUser;
  register: AuthenticatedUser;
  updateMe: User;
  updateRoleForUser: User;
  updateTrip: Trip;
  updateUser: User;
};

export type MutationAddUserToTripArgs = {
  tripId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationChangeMyPasswordArgs = {
  input: UserChangePassword;
};

export type MutationCreateReviewArgs = {
  comment: Scalars["String"]["input"];
  rating: Scalars["Int"]["input"];
  targetId: Scalars["Int"]["input"];
};

export type MutationCreateTripArgs = {
  data: TripInput;
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars["Int"]["input"];
};

export type MutationDeleteTripArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationLoginArgs = {
  input: UserLoginInput;
};

export type MutationRegisterArgs = {
  input: UserRegisterInput;
};

export type MutationUpdateMeArgs = {
  input: UserUpdateMe;
};

export type MutationUpdateRoleForUserArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationUpdateTripArgs = {
  data: TripUpdateInput;
  id: Scalars["Float"]["input"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["Float"]["input"];
  input: UserUpdateAdmin;
};

export type Query = {
  __typename?: "Query";
  getTripsByDateAndLocations: Array<Trip>;
  getUserById: User;
  me: User;
  reviews: Array<Review>;
  reviewsForUser: Array<Review>;
  trips: Array<Trip>;
  users: Array<User>;
};

export type QueryGetTripsByDateAndLocationsArgs = {
  date: Scalars["DateTimeISO"]["input"];
  startLocation: Scalars["String"]["input"];
  stopLocations: Scalars["String"]["input"];
};

export type QueryGetUserByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryReviewsForUserArgs = {
  userId: Scalars["Int"]["input"];
};

export type Review = {
  __typename?: "Review";
  author: User;
  comment: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["Float"]["output"];
  rating: Scalars["Float"]["output"];
  target: User;
  type: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type Trip = {
  __typename?: "Trip";
  createdAt: Scalars["DateTimeISO"]["output"];
  date: Scalars["DateTimeISO"]["output"];
  driver: Scalars["Float"]["output"];
  endLocation: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  passengers: Array<User>;
  price: Scalars["Float"]["output"];
  startLocation: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  stopLocations: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type TripInput = {
  date: Scalars["DateTimeISO"]["input"];
  endLocation: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  startLocation: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  stopLocations: Scalars["String"]["input"];
};

export type TripUpdateInput = {
  date?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  endLocation?: InputMaybe<Scalars["String"]["input"]>;
  passengers?: InputMaybe<Array<Scalars["String"]["input"]>>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  startLocation?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  stopLocations?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  birthdate: Scalars["DateTimeISO"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  firstname: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  isAdmin: Scalars["Boolean"]["output"];
  lastname: Scalars["String"]["output"];
  phoneNumber: Scalars["String"]["output"];
  pictureUrl: Scalars["String"]["output"];
  reviewsAsAuthor: Array<Review>;
  reviewsAsTarget: Array<Review>;
  trips: Array<Trip>;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type UserChangePassword = {
  password: Scalars["String"]["input"];
  repeatedPassword: Scalars["String"]["input"];
};

export type UserLoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type UserRegisterInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type UserUpdateAdmin = {
  birthdate: Scalars["DateTimeISO"]["input"];
  description: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  firstname: Scalars["String"]["input"];
  lastname: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  pictureUrl: Scalars["String"]["input"];
};

export type UserUpdateMe = {
  birthdate: Scalars["DateTimeISO"]["input"];
  description: Scalars["String"]["input"];
  firstname: Scalars["String"]["input"];
  lastname: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  pictureUrl: Scalars["String"]["input"];
};

export type AddUserToTripMutationVariables = Exact<{
  tripId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type AddUserToTripMutation = {
  __typename?: "Mutation";
  addUserToTrip: { __typename?: "Trip"; id: number };
};

export type ChangePasswordMutationVariables = Exact<{
  input: UserChangePassword;
}>;

export type ChangePasswordMutation = {
  __typename?: "Mutation";
  changeMyPassword: { __typename?: "User"; id: number };
};

export type CreateReviewMutationVariables = Exact<{
  rating: Scalars["Int"]["input"];
  comment: Scalars["String"]["input"];
  targetId: Scalars["Int"]["input"];
}>;

export type CreateReviewMutation = {
  __typename?: "Mutation";
  createReview: { __typename?: "Review"; id: number };
};

export type CreateTripMutationVariables = Exact<{
  data: TripInput;
}>;

export type CreateTripMutation = {
  __typename?: "Mutation";
  createTrip: {
    __typename?: "Trip";
    id: number;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    driver: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeleteTripMutationVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type DeleteTripMutation = {
  __typename?: "Mutation";
  deleteTrip: boolean;
};

export type DeleteMeMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteMeMutation = { __typename?: "Mutation"; deleteMe: string };

export type LoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "AuthenticatedUser"; token: string };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me: {
    __typename?: "User";
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    description: string;
    birthdate: any;
    phoneNumber: string;
    pictureUrl: string;
  };
};

export type RegisterMutationVariables = Exact<{
  input: UserRegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: { __typename?: "AuthenticatedUser"; token: string };
};

export type UpdateTripMutationVariables = Exact<{
  id: Scalars["Float"]["input"];
  data: TripUpdateInput;
}>;

export type UpdateTripMutation = {
  __typename?: "Mutation";
  updateTrip: {
    __typename?: "Trip";
    id: number;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    driver: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type UpdateMeMutationVariables = Exact<{
  input: UserUpdateMe;
}>;

export type UpdateMeMutation = {
  __typename?: "Mutation";
  updateMe: {
    __typename?: "User";
    firstname: string;
    lastname: string;
    phoneNumber: string;
    birthdate: any;
    description: string;
    pictureUrl: string;
  };
};

export type GetAllTripsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTripsQuery = {
  __typename?: "Query";
  trips: Array<{
    __typename?: "Trip";
    id: number;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    driver: number;
    createdAt: any;
    updatedAt: any;
    passengers: Array<{ __typename?: "User"; id: number; email: string }>;
  }>;
};

export type GetReviewsForUserQueryVariables = Exact<{
  userId: Scalars["Int"]["input"];
}>;

export type GetReviewsForUserQuery = {
  __typename?: "Query";
  reviewsForUser: Array<{
    __typename?: "Review";
    id: number;
    rating: number;
    comment: string;
    author: { __typename?: "User"; id: number; email: string };
  }>;
};

export type GetTripsByDateAndLocationsQueryVariables = Exact<{
  date: Scalars["DateTimeISO"]["input"];
  startLocation: Scalars["String"]["input"];
  stopLocations: Scalars["String"]["input"];
}>;

export type GetTripsByDateAndLocationsQuery = {
  __typename?: "Query";
  getTripsByDateAndLocations: Array<{
    __typename?: "Trip";
    id: number;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    driver: number;
    createdAt: any;
    updatedAt: any;
    passengers: Array<{ __typename?: "User"; id: number; email: string }>;
  }>;
};

export const AddUserToTripDocument = gql`
  mutation AddUserToTrip($tripId: Float!, $userId: Float!) {
    addUserToTrip(tripId: $tripId, userId: $userId) {
      id
    }
  }
`;
export type AddUserToTripMutationFn = Apollo.MutationFunction<
  AddUserToTripMutation,
  AddUserToTripMutationVariables
>;

/**
 * __useAddUserToTripMutation__
 *
 * To run a mutation, you first call `useAddUserToTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserToTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserToTripMutation, { data, loading, error }] = useAddUserToTripMutation({
 *   variables: {
 *      tripId: // value for 'tripId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddUserToTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserToTripMutation,
    AddUserToTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddUserToTripMutation,
    AddUserToTripMutationVariables
  >(AddUserToTripDocument, options);
}
export type AddUserToTripMutationHookResult = ReturnType<
  typeof useAddUserToTripMutation
>;
export type AddUserToTripMutationResult =
  Apollo.MutationResult<AddUserToTripMutation>;
export type AddUserToTripMutationOptions = Apollo.BaseMutationOptions<
  AddUserToTripMutation,
  AddUserToTripMutationVariables
>;
export const ChangePasswordDocument = gql`
  mutation ChangePassword($input: UserChangePassword!) {
    changeMyPassword(input: $input) {
      id
    }
  }
`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, options);
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>;
export type ChangePasswordMutationResult =
  Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const CreateReviewDocument = gql`
  mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {
    createReview(rating: $rating, comment: $comment, targetId: $targetId) {
      id
    }
  }
`;
export type CreateReviewMutationFn = Apollo.MutationFunction<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      rating: // value for 'rating'
 *      comment: // value for 'comment'
 *      targetId: // value for 'targetId'
 *   },
 * });
 */
export function useCreateReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >(CreateReviewDocument, options);
}
export type CreateReviewMutationHookResult = ReturnType<
  typeof useCreateReviewMutation
>;
export type CreateReviewMutationResult =
  Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;
export const CreateTripDocument = gql`
  mutation CreateTrip($data: TripInput!) {
    createTrip(data: $data) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver
      createdAt
      updatedAt
    }
  }
`;
export type CreateTripMutationFn = Apollo.MutationFunction<
  CreateTripMutation,
  CreateTripMutationVariables
>;

/**
 * __useCreateTripMutation__
 *
 * To run a mutation, you first call `useCreateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTripMutation, { data, loading, error }] = useCreateTripMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTripMutation,
    CreateTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTripMutation, CreateTripMutationVariables>(
    CreateTripDocument,
    options
  );
}
export type CreateTripMutationHookResult = ReturnType<
  typeof useCreateTripMutation
>;
export type CreateTripMutationResult =
  Apollo.MutationResult<CreateTripMutation>;
export type CreateTripMutationOptions = Apollo.BaseMutationOptions<
  CreateTripMutation,
  CreateTripMutationVariables
>;
export const DeleteTripDocument = gql`
  mutation DeleteTrip($id: Float!) {
    deleteTrip(id: $id)
  }
`;
export type DeleteTripMutationFn = Apollo.MutationFunction<
  DeleteTripMutation,
  DeleteTripMutationVariables
>;

/**
 * __useDeleteTripMutation__
 *
 * To run a mutation, you first call `useDeleteTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTripMutation, { data, loading, error }] = useDeleteTripMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTripMutation,
    DeleteTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTripMutation, DeleteTripMutationVariables>(
    DeleteTripDocument,
    options
  );
}
export type DeleteTripMutationHookResult = ReturnType<
  typeof useDeleteTripMutation
>;
export type DeleteTripMutationResult =
  Apollo.MutationResult<DeleteTripMutation>;
export type DeleteTripMutationOptions = Apollo.BaseMutationOptions<
  DeleteTripMutation,
  DeleteTripMutationVariables
>;
export const DeleteMeDocument = gql`
  mutation DeleteMe {
    deleteMe
  }
`;
export type DeleteMeMutationFn = Apollo.MutationFunction<
  DeleteMeMutation,
  DeleteMeMutationVariables
>;

/**
 * __useDeleteMeMutation__
 *
 * To run a mutation, you first call `useDeleteMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeMutation, { data, loading, error }] = useDeleteMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteMeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMeMutation,
    DeleteMeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteMeMutation, DeleteMeMutationVariables>(
    DeleteMeDocument,
    options
  );
}
export type DeleteMeMutationHookResult = ReturnType<typeof useDeleteMeMutation>;
export type DeleteMeMutationResult = Apollo.MutationResult<DeleteMeMutation>;
export type DeleteMeMutationOptions = Apollo.BaseMutationOptions<
  DeleteMeMutation,
  DeleteMeMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($input: UserLoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      email
      firstname
      lastname
      description
      birthdate
      phoneNumber
      pictureUrl
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    options
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
  mutation Register($input: UserRegisterInput!) {
    register(input: $input) {
      token
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const UpdateTripDocument = gql`
  mutation UpdateTrip($id: Float!, $data: TripUpdateInput!) {
    updateTrip(id: $id, data: $data) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver
      createdAt
      updatedAt
    }
  }
`;
export type UpdateTripMutationFn = Apollo.MutationFunction<
  UpdateTripMutation,
  UpdateTripMutationVariables
>;

/**
 * __useUpdateTripMutation__
 *
 * To run a mutation, you first call `useUpdateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTripMutation, { data, loading, error }] = useUpdateTripMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTripMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTripMutation,
    UpdateTripMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTripMutation, UpdateTripMutationVariables>(
    UpdateTripDocument,
    options
  );
}
export type UpdateTripMutationHookResult = ReturnType<
  typeof useUpdateTripMutation
>;
export type UpdateTripMutationResult =
  Apollo.MutationResult<UpdateTripMutation>;
export type UpdateTripMutationOptions = Apollo.BaseMutationOptions<
  UpdateTripMutation,
  UpdateTripMutationVariables
>;
export const UpdateMeDocument = gql`
  mutation UpdateMe($input: UserUpdateMe!) {
    updateMe(input: $input) {
      firstname
      lastname
      phoneNumber
      birthdate
      description
      pictureUrl
    }
  }
`;
export type UpdateMeMutationFn = Apollo.MutationFunction<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(
    UpdateMeDocument,
    options
  );
}
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;
export const GetAllTripsDocument = gql`
  query GetAllTrips {
    trips {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver
      createdAt
      updatedAt
      passengers {
        id
        email
      }
    }
  }
`;

/**
 * __useGetAllTripsQuery__
 *
 * To run a query within a React component, call `useGetAllTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTripsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTripsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllTripsQuery,
    GetAllTripsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTripsQuery, GetAllTripsQueryVariables>(
    GetAllTripsDocument,
    options
  );
}
export function useGetAllTripsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTripsQuery,
    GetAllTripsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllTripsQuery, GetAllTripsQueryVariables>(
    GetAllTripsDocument,
    options
  );
}
export function useGetAllTripsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllTripsQuery,
    GetAllTripsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllTripsQuery, GetAllTripsQueryVariables>(
    GetAllTripsDocument,
    options
  );
}
export type GetAllTripsQueryHookResult = ReturnType<typeof useGetAllTripsQuery>;
export type GetAllTripsLazyQueryHookResult = ReturnType<
  typeof useGetAllTripsLazyQuery
>;
export type GetAllTripsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllTripsSuspenseQuery
>;
export type GetAllTripsQueryResult = Apollo.QueryResult<
  GetAllTripsQuery,
  GetAllTripsQueryVariables
>;
export const GetReviewsForUserDocument = gql`
  query GetReviewsForUser($userId: Int!) {
    reviewsForUser(userId: $userId) {
      id
      rating
      comment
      author {
        id
        email
      }
    }
  }
`;

/**
 * __useGetReviewsForUserQuery__
 *
 * To run a query within a React component, call `useGetReviewsForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsForUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetReviewsForUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetReviewsForUserQuery,
    GetReviewsForUserQueryVariables
  > &
    (
      | { variables: GetReviewsForUserQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetReviewsForUserQuery,
    GetReviewsForUserQueryVariables
  >(GetReviewsForUserDocument, options);
}
export function useGetReviewsForUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReviewsForUserQuery,
    GetReviewsForUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetReviewsForUserQuery,
    GetReviewsForUserQueryVariables
  >(GetReviewsForUserDocument, options);
}
export function useGetReviewsForUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetReviewsForUserQuery,
    GetReviewsForUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetReviewsForUserQuery,
    GetReviewsForUserQueryVariables
  >(GetReviewsForUserDocument, options);
}
export type GetReviewsForUserQueryHookResult = ReturnType<
  typeof useGetReviewsForUserQuery
>;
export type GetReviewsForUserLazyQueryHookResult = ReturnType<
  typeof useGetReviewsForUserLazyQuery
>;
export type GetReviewsForUserSuspenseQueryHookResult = ReturnType<
  typeof useGetReviewsForUserSuspenseQuery
>;
export type GetReviewsForUserQueryResult = Apollo.QueryResult<
  GetReviewsForUserQuery,
  GetReviewsForUserQueryVariables
>;
export const GetTripsByDateAndLocationsDocument = gql`
  query getTripsByDateAndLocations(
    $date: DateTimeISO!
    $startLocation: String!
    $stopLocations: String!
  ) {
    getTripsByDateAndLocations(
      date: $date
      startLocation: $startLocation
      stopLocations: $stopLocations
    ) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver
      createdAt
      updatedAt
      passengers {
        id
        email
      }
    }
  }
`;

/**
 * __useGetTripsByDateAndLocationsQuery__
 *
 * To run a query within a React component, call `useGetTripsByDateAndLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTripsByDateAndLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTripsByDateAndLocationsQuery({
 *   variables: {
 *      date: // value for 'date'
 *      startLocation: // value for 'startLocation'
 *      stopLocations: // value for 'stopLocations'
 *   },
 * });
 */
export function useGetTripsByDateAndLocationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTripsByDateAndLocationsQuery,
    GetTripsByDateAndLocationsQueryVariables
  > &
    (
      | { variables: GetTripsByDateAndLocationsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTripsByDateAndLocationsQuery,
    GetTripsByDateAndLocationsQueryVariables
  >(GetTripsByDateAndLocationsDocument, options);
}
export function useGetTripsByDateAndLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTripsByDateAndLocationsQuery,
    GetTripsByDateAndLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTripsByDateAndLocationsQuery,
    GetTripsByDateAndLocationsQueryVariables
  >(GetTripsByDateAndLocationsDocument, options);
}
export function useGetTripsByDateAndLocationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTripsByDateAndLocationsQuery,
    GetTripsByDateAndLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetTripsByDateAndLocationsQuery,
    GetTripsByDateAndLocationsQueryVariables
  >(GetTripsByDateAndLocationsDocument, options);
}
export type GetTripsByDateAndLocationsQueryHookResult = ReturnType<
  typeof useGetTripsByDateAndLocationsQuery
>;
export type GetTripsByDateAndLocationsLazyQueryHookResult = ReturnType<
  typeof useGetTripsByDateAndLocationsLazyQuery
>;
export type GetTripsByDateAndLocationsSuspenseQueryHookResult = ReturnType<
  typeof useGetTripsByDateAndLocationsSuspenseQuery
>;
export type GetTripsByDateAndLocationsQueryResult = Apollo.QueryResult<
  GetTripsByDateAndLocationsQuery,
  GetTripsByDateAndLocationsQueryVariables
>;
