/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation AddUserToTrip($tripId: Float!, $userId: Float!) {\n  addUserToTrip(tripId: $tripId, userId: $userId) {\n    id\n  }\n}": types.AddUserToTripDocument,
    "mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {\n  createReview(rating: $rating, comment: $comment, targetId: $targetId) {\n    id\n  }\n}": types.CreateReviewDocument,
    "mutation CreateTrip($data: TripInput!) {\n  createTrip(data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n  }\n}": types.CreateTripDocument,
    "mutation DeleteTrip($id: Float!) {\n  deleteTrip(id: $id)\n}": types.DeleteTripDocument,
    "mutation Login($input: UserLoginInput!) {\n  login(input: $input) {\n    token\n  }\n}": types.LoginDocument,
    "query Me {\n  me {\n    id\n    email\n  }\n}": types.MeDocument,
    "mutation Register($input: UserRegisterInput!) {\n  register(input: $input) {\n    token\n  }\n}": types.RegisterDocument,
    "mutation UpdateTrip($id: Float!, $data: TripUpdateInput!) {\n  updateTrip(id: $id, data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n  }\n}": types.UpdateTripDocument,
    "query GetAllTrips {\n  trips {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}": types.GetAllTripsDocument,
    "query GetReviewsForUser($userId: Int!) {\n  reviewsForUser(userId: $userId) {\n    id\n    rating\n    comment\n    author {\n      id\n      email\n    }\n  }\n}": types.GetReviewsForUserDocument,
    "query getTripsByDateAndLocations($date: DateTimeISO!, $startLocation: String!, $stopLocations: String!) {\n  getTripsByDateAndLocations(\n    date: $date\n    startLocation: $startLocation\n    stopLocations: $stopLocations\n  ) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}": types.GetTripsByDateAndLocationsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddUserToTrip($tripId: Float!, $userId: Float!) {\n  addUserToTrip(tripId: $tripId, userId: $userId) {\n    id\n  }\n}"): (typeof documents)["mutation AddUserToTrip($tripId: Float!, $userId: Float!) {\n  addUserToTrip(tripId: $tripId, userId: $userId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {\n  createReview(rating: $rating, comment: $comment, targetId: $targetId) {\n    id\n  }\n}"): (typeof documents)["mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {\n  createReview(rating: $rating, comment: $comment, targetId: $targetId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTrip($data: TripInput!) {\n  createTrip(data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateTrip($data: TripInput!) {\n  createTrip(data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTrip($id: Float!) {\n  deleteTrip(id: $id)\n}"): (typeof documents)["mutation DeleteTrip($id: Float!) {\n  deleteTrip(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: UserLoginInput!) {\n  login(input: $input) {\n    token\n  }\n}"): (typeof documents)["mutation Login($input: UserLoginInput!) {\n  login(input: $input) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($input: UserRegisterInput!) {\n  register(input: $input) {\n    token\n  }\n}"): (typeof documents)["mutation Register($input: UserRegisterInput!) {\n  register(input: $input) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTrip($id: Float!, $data: TripUpdateInput!) {\n  updateTrip(id: $id, data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateTrip($id: Float!, $data: TripUpdateInput!) {\n  updateTrip(id: $id, data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllTrips {\n  trips {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query GetAllTrips {\n  trips {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetReviewsForUser($userId: Int!) {\n  reviewsForUser(userId: $userId) {\n    id\n    rating\n    comment\n    author {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query GetReviewsForUser($userId: Int!) {\n  reviewsForUser(userId: $userId) {\n    id\n    rating\n    comment\n    author {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTripsByDateAndLocations($date: DateTimeISO!, $startLocation: String!, $stopLocations: String!) {\n  getTripsByDateAndLocations(\n    date: $date\n    startLocation: $startLocation\n    stopLocations: $stopLocations\n  ) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query getTripsByDateAndLocations($date: DateTimeISO!, $startLocation: String!, $stopLocations: String!) {\n  getTripsByDateAndLocations(\n    date: $date\n    startLocation: $startLocation\n    stopLocations: $stopLocations\n  ) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;