/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeMyPassword: User;
  createReview: Review;
  createTrip: Trip;
  deleteMe: Scalars['String']['output'];
  deleteReview: Scalars['Boolean']['output'];
  deleteTrip: Scalars['Boolean']['output'];
  deleteUser: Scalars['String']['output'];
  login: AuthenticatedUser;
  register: AuthenticatedUser;
  updateMe: User;
  updateRoleForUser: User;
  updateTrip: Trip;
  updateUser: User;
};


export type MutationChangeMyPasswordArgs = {
  input: UserChangePassword;
};


export type MutationCreateReviewArgs = {
  comment: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};


export type MutationCreateTripArgs = {
  data: TripInput;
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['Int']['input'];
};


export type MutationDeleteTripArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float']['input'];
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
  id: Scalars['Float']['input'];
};


export type MutationUpdateTripArgs = {
  data: TripUpdateInput;
  id: Scalars['Float']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['Float']['input'];
  input: UserUpdateAdmin;
};

export type Query = {
  __typename?: 'Query';
  getTripsByDateAndLocations: Array<Trip>;
  getUserById: User;
  me: User;
  reviews: Array<Review>;
  reviewsForUser: Array<Review>;
  trips: Array<Trip>;
  users: Array<User>;
};


export type QueryGetTripsByDateAndLocationsArgs = {
  date: Scalars['DateTimeISO']['input'];
  startLocation: Scalars['String']['input'];
  stopLocations: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryReviewsForUserArgs = {
  userId: Scalars['Int']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
};

export type Trip = {
  __typename?: 'Trip';
  createdAt: Scalars['DateTimeISO']['output'];
  date: Scalars['DateTimeISO']['output'];
  driver: Scalars['Float']['output'];
  endLocation: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  passengers: Array<User>;
  price: Scalars['Float']['output'];
  startLocation: Scalars['String']['output'];
  status: Scalars['String']['output'];
  stopLocations: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type TripInput = {
  date: Scalars['DateTimeISO']['input'];
  endLocation: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  startLocation: Scalars['String']['input'];
  status: Scalars['String']['input'];
  stopLocations: Scalars['String']['input'];
};

export type TripUpdateInput = {
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  endLocation?: InputMaybe<Scalars['String']['input']>;
  passengers?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  startLocation?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stopLocations?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  birthdate: Scalars['DateTimeISO']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isAdmin: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  pictureUrl: Scalars['String']['output'];
  reviews: Array<Review>;
  trips: Array<Trip>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserChangePassword = {
  password: Scalars['String']['input'];
  repeatedPassword: Scalars['String']['input'];
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserUpdateAdmin = {
  birthdate: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  pictureUrl: Scalars['String']['input'];
};

export type UserUpdateMe = {
  birthdate: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  pictureUrl: Scalars['String']['input'];
};

export type GetAllTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTripsQuery = { __typename?: 'Query', trips: Array<{ __typename?: 'Trip', id: number, date: any, price: number, status: string, startLocation: string, stopLocations: string, endLocation: string, driver: number, createdAt: any, updatedAt: any }> };


export const GetAllTripsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTrips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startLocation"}},{"kind":"Field","name":{"kind":"Name","value":"stopLocations"}},{"kind":"Field","name":{"kind":"Name","value":"endLocation"}},{"kind":"Field","name":{"kind":"Name","value":"driver"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllTripsQuery, GetAllTripsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeMyPassword: User;
  createReview: Review;
  createTrip: Trip;
  deleteMe: Scalars['String']['output'];
  deleteReview: Scalars['Boolean']['output'];
  deleteTrip: Scalars['Boolean']['output'];
  deleteUser: Scalars['String']['output'];
  login: AuthenticatedUser;
  register: AuthenticatedUser;
  updateMe: User;
  updateRoleForUser: User;
  updateTrip: Trip;
  updateUser: User;
};


export type MutationChangeMyPasswordArgs = {
  input: UserChangePassword;
};


export type MutationCreateReviewArgs = {
  comment: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};


export type MutationCreateTripArgs = {
  data: TripInput;
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['Int']['input'];
};


export type MutationDeleteTripArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float']['input'];
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
  id: Scalars['Float']['input'];
};


export type MutationUpdateTripArgs = {
  data: TripUpdateInput;
  id: Scalars['Float']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['Float']['input'];
  input: UserUpdateAdmin;
};

export type Query = {
  __typename?: 'Query';
  getTripsByDateAndLocations: Array<Trip>;
  getUserById: User;
  me: User;
  reviews: Array<Review>;
  reviewsForUser: Array<Review>;
  trips: Array<Trip>;
  users: Array<User>;
};


export type QueryGetTripsByDateAndLocationsArgs = {
  date: Scalars['DateTimeISO']['input'];
  startLocation: Scalars['String']['input'];
  stopLocations: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryReviewsForUserArgs = {
  userId: Scalars['Int']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
};

export type Trip = {
  __typename?: 'Trip';
  createdAt: Scalars['DateTimeISO']['output'];
  date: Scalars['DateTimeISO']['output'];
  driver: Scalars['Float']['output'];
  endLocation: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  passengers: Array<User>;
  price: Scalars['Float']['output'];
  startLocation: Scalars['String']['output'];
  status: Scalars['String']['output'];
  stopLocations: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type TripInput = {
  date: Scalars['DateTimeISO']['input'];
  endLocation: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  startLocation: Scalars['String']['input'];
  status: Scalars['String']['input'];
  stopLocations: Scalars['String']['input'];
};

export type TripUpdateInput = {
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  endLocation?: InputMaybe<Scalars['String']['input']>;
  passengers?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  startLocation?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stopLocations?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  birthdate: Scalars['DateTimeISO']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isAdmin: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  pictureUrl: Scalars['String']['output'];
  reviews: Array<Review>;
  trips: Array<Trip>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserChangePassword = {
  password: Scalars['String']['input'];
  repeatedPassword: Scalars['String']['input'];
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserUpdateAdmin = {
  birthdate: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  pictureUrl: Scalars['String']['input'];
};

export type UserUpdateMe = {
  birthdate: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  pictureUrl: Scalars['String']['input'];
};

export type GetAllTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTripsQuery = { __typename?: 'Query', trips: Array<{ __typename?: 'Trip', id: number, date: any, price: number, status: string, startLocation: string, stopLocations: string, endLocation: string, driver: number, createdAt: any, updatedAt: any }> };


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
export function useGetAllTripsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTripsQuery, GetAllTripsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTripsQuery, GetAllTripsQueryVariables>(GetAllTripsDocument, options);
      }
export function useGetAllTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTripsQuery, GetAllTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTripsQuery, GetAllTripsQueryVariables>(GetAllTripsDocument, options);
        }
export function useGetAllTripsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTripsQuery, GetAllTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTripsQuery, GetAllTripsQueryVariables>(GetAllTripsDocument, options);
        }
export type GetAllTripsQueryHookResult = ReturnType<typeof useGetAllTripsQuery>;
export type GetAllTripsLazyQueryHookResult = ReturnType<typeof useGetAllTripsLazyQuery>;
export type GetAllTripsSuspenseQueryHookResult = ReturnType<typeof useGetAllTripsSuspenseQuery>;
export type GetAllTripsQueryResult = Apollo.QueryResult<GetAllTripsQuery, GetAllTripsQueryVariables>;