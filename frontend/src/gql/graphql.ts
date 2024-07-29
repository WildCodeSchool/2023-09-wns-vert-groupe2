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
  addAPassanger: Trip;
  changeMyPassword: User;
  createReview: Review;
  createTrip: Trip;
  deleteMe: Scalars["String"]["output"];
  deleteReview: Scalars["Boolean"]["output"];
  deleteTrip: Scalars["Boolean"]["output"];
  deleteUser: Scalars["String"]["output"];
  login: AuthenticatedUser;
  register: AuthenticatedUser;
  removeAPassanger: Trip;
  updateMe: User;
  updateRoleForUser: User;
  updateTrip: Trip;
  updateUser: User;
};

export type MutationAddAPassangerArgs = {
  id: Scalars["String"]["input"];
  passengerId: Scalars["String"]["input"];
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
  id: Scalars["String"]["input"];
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

export type MutationRemoveAPassangerArgs = {
  id: Scalars["String"]["input"];
  passengerId: Scalars["String"]["input"];
};

export type MutationUpdateMeArgs = {
  input: UserUpdateMe;
};

export type MutationUpdateRoleForUserArgs = {
  id: Scalars["String"]["input"];
};

export type MutationUpdateTripArgs = {
  data: TripUpdateInput;
  id: Scalars["String"]["input"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"]["input"];
  input: UserUpdateAdmin;
};

export type Query = {
  __typename?: "Query";
  getAllTripsOfDriver: Array<Trip>;
  getAllTripsOfPassenger: Array<Trip>;
  getTripById: Trip;
  getTripsByDateAndLocations: Array<Trip>;
  getUserById: User;
  me: User;
  reviews: Array<Review>;
  reviewsFromAUser: Array<Review>;
  reviewsOfAUser: Array<Review>;
  trips: Array<Trip>;
  users: Array<User>;
};

export type QueryGetAllTripsOfDriverArgs = {
  driverId: Scalars["String"]["input"];
};

export type QueryGetAllTripsOfPassengerArgs = {
  passengerId: Scalars["String"]["input"];
};

export type QueryGetTripByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryGetTripsByDateAndLocationsArgs = {
  date: Scalars["DateTimeISO"]["input"];
  endLocation: Scalars["String"]["input"];
  startLocation: Scalars["String"]["input"];
};

export type QueryGetUserByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryReviewsFromAUserArgs = {
  userId: Scalars["String"]["input"];
};

export type QueryReviewsOfAUserArgs = {
  userId: Scalars["String"]["input"];
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
  driver: User;
  endLocation: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  numberOfPassengers: Scalars["Float"]["output"];
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
  numberOfPassengers: Scalars["Float"]["input"];
  price: Scalars["Float"]["input"];
  startLocation: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  stopLocations: Scalars["String"]["input"];
};

export type TripUpdateInput = {
  date?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  endLocation?: InputMaybe<Scalars["String"]["input"]>;
  numberOfPassengers?: InputMaybe<Scalars["Float"]["input"]>;
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
  id: Scalars["String"]["output"];
  isAdmin: Scalars["Boolean"]["output"];
  lastname: Scalars["String"]["output"];
  phoneNumber: Scalars["String"]["output"];
  pictureUrl: Scalars["String"]["output"];
  reviewsAsAuthor: Array<Review>;
  reviewsAsTarget: Array<Review>;
  trips: Array<Trip>;
  tripsAsDriver: Array<Trip>;
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
  firstname: Scalars["String"]["input"];
  lastname: Scalars["String"]["input"];
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

export type AddAPassangerMutationVariables = Exact<{
  id: Scalars["String"]["input"];
  passengerId: Scalars["String"]["input"];
}>;

export type AddAPassangerMutation = {
  __typename?: "Mutation";
  addAPassanger: { __typename?: "Trip"; id: string };
};

export type ChangePasswordMutationVariables = Exact<{
  input: UserChangePassword;
}>;

export type ChangePasswordMutation = {
  __typename?: "Mutation";
  changeMyPassword: { __typename?: "User"; id: string };
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
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    createdAt: any;
    numberOfPassengers: number;
    driver: { __typename?: "User"; id: string; email: string };
  };
};

export type DeleteTripMutationVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type DeleteTripMutation = {
  __typename?: "Mutation";
  deleteTrip: boolean;
};

export type DeleteMeMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteMeMutation = { __typename?: "Mutation"; deleteMe: string };

export type GetReviewsFromAUserQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetReviewsFromAUserQuery = {
  __typename?: "Query";
  reviewsFromAUser: Array<{
    __typename?: "Review";
    id: number;
    rating: number;
    comment: string;
    type: string;
    createdAt: any;
    target: {
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    };
  }>;
};

export type GetReviewsOfAUserQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetReviewsOfAUserQuery = {
  __typename?: "Query";
  reviewsOfAUser: Array<{
    __typename?: "Review";
    id: number;
    rating: number;
    comment: string;
    type: string;
    createdAt: any;
    author: {
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    };
  }>;
};

export type GetTripByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetTripByIdQuery = {
  __typename?: "Query";
  getTripById: {
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    numberOfPassengers: number;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    createdAt: any;
    updatedAt: any;
    driver: {
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    };
    passengers: Array<{
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    }>;
  };
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById: {
    __typename?: "User";
    id: string;
    firstname: string;
    lastname: string;
    description: string;
    pictureUrl: string;
  };
};

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
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    description: string;
    birthdate: any;
    phoneNumber: string;
    pictureUrl: string;
    reviewsAsTarget: Array<{
      __typename?: "Review";
      id: number;
      rating: number;
      comment: string;
    }>;
    reviewsAsAuthor: Array<{
      __typename?: "Review";
      id: number;
      rating: number;
      comment: string;
    }>;
  };
};

export type RegisterMutationVariables = Exact<{
  input: UserRegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: { __typename?: "AuthenticatedUser"; token: string };
};

export type RemoveAPassangerMutationVariables = Exact<{
  id: Scalars["String"]["input"];
  passengerId: Scalars["String"]["input"];
}>;

export type RemoveAPassangerMutation = {
  __typename?: "Mutation";
  removeAPassanger: { __typename?: "Trip"; id: string };
};

export type UpdateTripMutationVariables = Exact<{
  id: Scalars["String"]["input"];
  data: TripUpdateInput;
}>;

export type UpdateTripMutation = {
  __typename?: "Mutation";
  updateTrip: {
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    createdAt: any;
    updatedAt: any;
    driver: { __typename?: "User"; id: string; email: string };
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
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    createdAt: any;
    updatedAt: any;
    driver: {
      __typename?: "User";
      id: string;
      email: string;
      firstname: string;
      lastname: string;
    };
    passengers: Array<{ __typename?: "User"; id: string; email: string }>;
  }>;
};

export type GetAllTripsOfPassengerQueryVariables = Exact<{
  passengerId: Scalars["String"]["input"];
}>;

export type GetAllTripsOfPassengerQuery = {
  __typename?: "Query";
  getAllTripsOfPassenger: Array<{
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    numberOfPassengers: number;
    createdAt: any;
    updatedAt: any;
    driver: {
      __typename?: "User";
      email: string;
      firstname: string;
      lastname: string;
    };
  }>;
};

export type GetTripsByDateAndLocationsQueryVariables = Exact<{
  date: Scalars["DateTimeISO"]["input"];
  startLocation: Scalars["String"]["input"];
  endLocation: Scalars["String"]["input"];
}>;

export type GetTripsByDateAndLocationsQuery = {
  __typename?: "Query";
  getTripsByDateAndLocations: Array<{
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    createdAt: any;
    updatedAt: any;
    driver: {
      __typename?: "User";
      id: string;
      email: string;
      firstname: string;
      lastname: string;
    };
    passengers: Array<{ __typename?: "User"; id: string; email: string }>;
  }>;
};

export type GetAllTripsOfDriverQueryVariables = Exact<{
  driverId: Scalars["String"]["input"];
}>;

export type GetAllTripsOfDriverQuery = {
  __typename?: "Query";
  getAllTripsOfDriver: Array<{
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    numberOfPassengers: number;
    createdAt: any;
    updatedAt: any;
  }>;
};

export const AddAPassangerDocument = gql`
  mutation addAPassanger($id: String!, $passengerId: String!) {
    addAPassanger(id: $id, passengerId: $passengerId) {
      id
    }
  }
`;
export type AddAPassangerMutationFn = Apollo.MutationFunction<
  AddAPassangerMutation,
  AddAPassangerMutationVariables
>;

/**
 * __useAddAPassangerMutation__
 *
 * To run a mutation, you first call `useAddAPassangerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAPassangerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAPassangerMutation, { data, loading, error }] = useAddAPassangerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      passengerId: // value for 'passengerId'
 *   },
 * });
 */
export function useAddAPassangerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddAPassangerMutation,
    AddAPassangerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddAPassangerMutation,
    AddAPassangerMutationVariables
  >(AddAPassangerDocument, options);
}
export type AddAPassangerMutationHookResult = ReturnType<
  typeof useAddAPassangerMutation
>;
export type AddAPassangerMutationResult =
  Apollo.MutationResult<AddAPassangerMutation>;
export type AddAPassangerMutationOptions = Apollo.BaseMutationOptions<
  AddAPassangerMutation,
  AddAPassangerMutationVariables
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
      driver {
        id
        email
      }
      createdAt
      numberOfPassengers
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
  mutation DeleteTrip($id: String!) {
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
export const GetReviewsFromAUserDocument = gql`
  query GetReviewsFromAUser($userId: String!) {
    reviewsFromAUser(userId: $userId) {
      id
      rating
      comment
      type
      createdAt
      target {
        id
        firstname
        lastname
      }
    }
  }
`;

/**
 * __useGetReviewsFromAUserQuery__
 *
 * To run a query within a React component, call `useGetReviewsFromAUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsFromAUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsFromAUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetReviewsFromAUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetReviewsFromAUserQuery,
    GetReviewsFromAUserQueryVariables
  > &
    (
      | { variables: GetReviewsFromAUserQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetReviewsFromAUserQuery,
    GetReviewsFromAUserQueryVariables
  >(GetReviewsFromAUserDocument, options);
}
export function useGetReviewsFromAUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReviewsFromAUserQuery,
    GetReviewsFromAUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetReviewsFromAUserQuery,
    GetReviewsFromAUserQueryVariables
  >(GetReviewsFromAUserDocument, options);
}
export function useGetReviewsFromAUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetReviewsFromAUserQuery,
    GetReviewsFromAUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetReviewsFromAUserQuery,
    GetReviewsFromAUserQueryVariables
  >(GetReviewsFromAUserDocument, options);
}
export type GetReviewsFromAUserQueryHookResult = ReturnType<
  typeof useGetReviewsFromAUserQuery
>;
export type GetReviewsFromAUserLazyQueryHookResult = ReturnType<
  typeof useGetReviewsFromAUserLazyQuery
>;
export type GetReviewsFromAUserSuspenseQueryHookResult = ReturnType<
  typeof useGetReviewsFromAUserSuspenseQuery
>;
export type GetReviewsFromAUserQueryResult = Apollo.QueryResult<
  GetReviewsFromAUserQuery,
  GetReviewsFromAUserQueryVariables
>;
export const GetReviewsOfAUserDocument = gql`
  query GetReviewsOfAUser($userId: String!) {
    reviewsOfAUser(userId: $userId) {
      id
      rating
      comment
      type
      createdAt
      author {
        id
        firstname
        lastname
      }
    }
  }
`;

/**
 * __useGetReviewsOfAUserQuery__
 *
 * To run a query within a React component, call `useGetReviewsOfAUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsOfAUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsOfAUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetReviewsOfAUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetReviewsOfAUserQuery,
    GetReviewsOfAUserQueryVariables
  > &
    (
      | { variables: GetReviewsOfAUserQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetReviewsOfAUserQuery,
    GetReviewsOfAUserQueryVariables
  >(GetReviewsOfAUserDocument, options);
}
export function useGetReviewsOfAUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReviewsOfAUserQuery,
    GetReviewsOfAUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetReviewsOfAUserQuery,
    GetReviewsOfAUserQueryVariables
  >(GetReviewsOfAUserDocument, options);
}
export function useGetReviewsOfAUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetReviewsOfAUserQuery,
    GetReviewsOfAUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetReviewsOfAUserQuery,
    GetReviewsOfAUserQueryVariables
  >(GetReviewsOfAUserDocument, options);
}
export type GetReviewsOfAUserQueryHookResult = ReturnType<
  typeof useGetReviewsOfAUserQuery
>;
export type GetReviewsOfAUserLazyQueryHookResult = ReturnType<
  typeof useGetReviewsOfAUserLazyQuery
>;
export type GetReviewsOfAUserSuspenseQueryHookResult = ReturnType<
  typeof useGetReviewsOfAUserSuspenseQuery
>;
export type GetReviewsOfAUserQueryResult = Apollo.QueryResult<
  GetReviewsOfAUserQuery,
  GetReviewsOfAUserQueryVariables
>;
export const GetTripByIdDocument = gql`
  query getTripById($id: String!) {
    getTripById(id: $id) {
      id
      date
      price
      status
      numberOfPassengers
      startLocation
      stopLocations
      endLocation
      driver {
        id
        firstname
        lastname
      }
      createdAt
      updatedAt
      passengers {
        id
        firstname
        lastname
      }
    }
  }
`;

/**
 * __useGetTripByIdQuery__
 *
 * To run a query within a React component, call `useGetTripByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTripByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTripByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTripByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTripByIdQuery,
    GetTripByIdQueryVariables
  > &
    (
      | { variables: GetTripByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTripByIdQuery, GetTripByIdQueryVariables>(
    GetTripByIdDocument,
    options
  );
}
export function useGetTripByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTripByIdQuery,
    GetTripByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTripByIdQuery, GetTripByIdQueryVariables>(
    GetTripByIdDocument,
    options
  );
}
export function useGetTripByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTripByIdQuery,
    GetTripByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTripByIdQuery, GetTripByIdQueryVariables>(
    GetTripByIdDocument,
    options
  );
}
export type GetTripByIdQueryHookResult = ReturnType<typeof useGetTripByIdQuery>;
export type GetTripByIdLazyQueryHookResult = ReturnType<
  typeof useGetTripByIdLazyQuery
>;
export type GetTripByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetTripByIdSuspenseQuery
>;
export type GetTripByIdQueryResult = Apollo.QueryResult<
  GetTripByIdQuery,
  GetTripByIdQueryVariables
>;
export const GetUserByIdDocument = gql`
  query getUserById($id: String!) {
    getUserById(id: $id) {
      id
      firstname
      lastname
      description
      pictureUrl
    }
  }
`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  > &
    (
      | { variables: GetUserByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetUserByIdSuspenseQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
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
      reviewsAsTarget {
        id
        rating
        comment
      }
      reviewsAsAuthor {
        id
        rating
        comment
      }
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
export const RemoveAPassangerDocument = gql`
  mutation removeAPassanger($id: String!, $passengerId: String!) {
    removeAPassanger(id: $id, passengerId: $passengerId) {
      id
    }
  }
`;
export type RemoveAPassangerMutationFn = Apollo.MutationFunction<
  RemoveAPassangerMutation,
  RemoveAPassangerMutationVariables
>;

/**
 * __useRemoveAPassangerMutation__
 *
 * To run a mutation, you first call `useRemoveAPassangerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAPassangerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAPassangerMutation, { data, loading, error }] = useRemoveAPassangerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      passengerId: // value for 'passengerId'
 *   },
 * });
 */
export function useRemoveAPassangerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveAPassangerMutation,
    RemoveAPassangerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveAPassangerMutation,
    RemoveAPassangerMutationVariables
  >(RemoveAPassangerDocument, options);
}
export type RemoveAPassangerMutationHookResult = ReturnType<
  typeof useRemoveAPassangerMutation
>;
export type RemoveAPassangerMutationResult =
  Apollo.MutationResult<RemoveAPassangerMutation>;
export type RemoveAPassangerMutationOptions = Apollo.BaseMutationOptions<
  RemoveAPassangerMutation,
  RemoveAPassangerMutationVariables
>;
export const UpdateTripDocument = gql`
  mutation UpdateTrip($id: String!, $data: TripUpdateInput!) {
    updateTrip(id: $id, data: $data) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver {
        id
        email
      }
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
      driver {
        id
        email
        firstname
        lastname
      }
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
export const GetAllTripsOfPassengerDocument = gql`
  query getAllTripsOfPassenger($passengerId: String!) {
    getAllTripsOfPassenger(passengerId: $passengerId) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver {
        email
        firstname
        lastname
      }
      numberOfPassengers
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetAllTripsOfPassengerQuery__
 *
 * To run a query within a React component, call `useGetAllTripsOfPassengerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTripsOfPassengerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTripsOfPassengerQuery({
 *   variables: {
 *      passengerId: // value for 'passengerId'
 *   },
 * });
 */
export function useGetAllTripsOfPassengerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllTripsOfPassengerQuery,
    GetAllTripsOfPassengerQueryVariables
  > &
    (
      | { variables: GetAllTripsOfPassengerQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllTripsOfPassengerQuery,
    GetAllTripsOfPassengerQueryVariables
  >(GetAllTripsOfPassengerDocument, options);
}
export function useGetAllTripsOfPassengerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTripsOfPassengerQuery,
    GetAllTripsOfPassengerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllTripsOfPassengerQuery,
    GetAllTripsOfPassengerQueryVariables
  >(GetAllTripsOfPassengerDocument, options);
}
export function useGetAllTripsOfPassengerSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllTripsOfPassengerQuery,
    GetAllTripsOfPassengerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllTripsOfPassengerQuery,
    GetAllTripsOfPassengerQueryVariables
  >(GetAllTripsOfPassengerDocument, options);
}
export type GetAllTripsOfPassengerQueryHookResult = ReturnType<
  typeof useGetAllTripsOfPassengerQuery
>;
export type GetAllTripsOfPassengerLazyQueryHookResult = ReturnType<
  typeof useGetAllTripsOfPassengerLazyQuery
>;
export type GetAllTripsOfPassengerSuspenseQueryHookResult = ReturnType<
  typeof useGetAllTripsOfPassengerSuspenseQuery
>;
export type GetAllTripsOfPassengerQueryResult = Apollo.QueryResult<
  GetAllTripsOfPassengerQuery,
  GetAllTripsOfPassengerQueryVariables
>;
export const GetTripsByDateAndLocationsDocument = gql`
  query getTripsByDateAndLocations(
    $date: DateTimeISO!
    $startLocation: String!
    $endLocation: String!
  ) {
    getTripsByDateAndLocations(
      date: $date
      startLocation: $startLocation
      endLocation: $endLocation
    ) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver {
        id
        email
        firstname
        lastname
      }
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
 *      endLocation: // value for 'endLocation'
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
export const GetAllTripsOfDriverDocument = gql`
  query getAllTripsOfDriver($driverId: String!) {
    getAllTripsOfDriver(driverId: $driverId) {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      numberOfPassengers
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetAllTripsOfDriverQuery__
 *
 * To run a query within a React component, call `useGetAllTripsOfDriverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTripsOfDriverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTripsOfDriverQuery({
 *   variables: {
 *      driverId: // value for 'driverId'
 *   },
 * });
 */
export function useGetAllTripsOfDriverQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllTripsOfDriverQuery,
    GetAllTripsOfDriverQueryVariables
  > &
    (
      | { variables: GetAllTripsOfDriverQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllTripsOfDriverQuery,
    GetAllTripsOfDriverQueryVariables
  >(GetAllTripsOfDriverDocument, options);
}
export function useGetAllTripsOfDriverLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTripsOfDriverQuery,
    GetAllTripsOfDriverQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllTripsOfDriverQuery,
    GetAllTripsOfDriverQueryVariables
  >(GetAllTripsOfDriverDocument, options);
}
export function useGetAllTripsOfDriverSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllTripsOfDriverQuery,
    GetAllTripsOfDriverQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllTripsOfDriverQuery,
    GetAllTripsOfDriverQueryVariables
  >(GetAllTripsOfDriverDocument, options);
}
export type GetAllTripsOfDriverQueryHookResult = ReturnType<
  typeof useGetAllTripsOfDriverQuery
>;
export type GetAllTripsOfDriverLazyQueryHookResult = ReturnType<
  typeof useGetAllTripsOfDriverLazyQuery
>;
export type GetAllTripsOfDriverSuspenseQueryHookResult = ReturnType<
  typeof useGetAllTripsOfDriverSuspenseQuery
>;
export type GetAllTripsOfDriverQueryResult = Apollo.QueryResult<
  GetAllTripsOfDriverQuery,
  GetAllTripsOfDriverQueryVariables
>;
