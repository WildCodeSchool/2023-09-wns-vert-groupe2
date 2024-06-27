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
    "mutation addAPassanger($id: String!, $passengerId: String!) {\n  addAPassanger(id: $id, passengerId: $passengerId) {\n    id\n  }\n}": types.AddAPassangerDocument,
    "mutation ChangePassword($input: UserChangePassword!) {\n  changeMyPassword(input: $input) {\n    id\n  }\n}": types.ChangePasswordDocument,
    "mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {\n  createReview(rating: $rating, comment: $comment, targetId: $targetId) {\n    id\n  }\n}": types.CreateReviewDocument,
    "mutation CreateTrip($data: TripInput!) {\n  createTrip(data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    numberOfPassengers\n  }\n}": types.CreateTripDocument,
    "mutation DeleteTrip($id: String!) {\n  deleteTrip(id: $id)\n}": types.DeleteTripDocument,
    "mutation DeleteMe {\n  deleteMe\n}": types.DeleteMeDocument,
    "query GetAllTrips {\n  trips {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n      firstname\n      lastname\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}": types.GetAllTripsDocument,
    "query GetReviewsForUser($userId: Int!) {\n  reviewsForUser(userId: $userId) {\n    id\n    rating\n    comment\n    author {\n      id\n      email\n    }\n  }\n}": types.GetReviewsForUserDocument,
    "query getTripById($id: String!) {\n  getTripById(id: $id) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}": types.GetTripByIdDocument,
    "query getTripsByDateAndLocations($date: DateTimeISO!, $startLocation: String!, $endLocation: String!) {\n  getTripsByDateAndLocations(\n    date: $date\n    startLocation: $startLocation\n    endLocation: $endLocation\n  ) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n      firstname\n      lastname\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}": types.GetTripsByDateAndLocationsDocument,
    "mutation Login($input: UserLoginInput!) {\n  login(input: $input) {\n    token\n  }\n}": types.LoginDocument,
    "query Me {\n  me {\n    id\n    email\n    firstname\n    lastname\n    description\n    birthdate\n    phoneNumber\n    pictureUrl\n    reviewsAsTarget {\n      id\n      rating\n      comment\n    }\n    reviewsAsAuthor {\n      id\n      rating\n      comment\n    }\n  }\n}": types.MeDocument,
    "mutation Register($input: UserRegisterInput!) {\n  register(input: $input) {\n    token\n  }\n}": types.RegisterDocument,
    "mutation removeAPassanger($id: String!, $passengerId: String!) {\n  removeAPassanger(id: $id, passengerId: $passengerId) {\n    id\n  }\n}": types.RemoveAPassangerDocument,
    "mutation UpdateTrip($id: String!, $data: TripUpdateInput!) {\n  updateTrip(id: $id, data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    updatedAt\n  }\n}": types.UpdateTripDocument,
    "mutation UpdateMe($input: UserUpdateMe!) {\n  updateMe(input: $input) {\n    firstname\n    lastname\n    phoneNumber\n    birthdate\n    description\n    pictureUrl\n  }\n}": types.UpdateMeDocument,
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
export function graphql(source: "mutation addAPassanger($id: String!, $passengerId: String!) {\n  addAPassanger(id: $id, passengerId: $passengerId) {\n    id\n  }\n}"): (typeof documents)["mutation addAPassanger($id: String!, $passengerId: String!) {\n  addAPassanger(id: $id, passengerId: $passengerId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangePassword($input: UserChangePassword!) {\n  changeMyPassword(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation ChangePassword($input: UserChangePassword!) {\n  changeMyPassword(input: $input) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {\n  createReview(rating: $rating, comment: $comment, targetId: $targetId) {\n    id\n  }\n}"): (typeof documents)["mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {\n  createReview(rating: $rating, comment: $comment, targetId: $targetId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTrip($data: TripInput!) {\n  createTrip(data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    numberOfPassengers\n  }\n}"): (typeof documents)["mutation CreateTrip($data: TripInput!) {\n  createTrip(data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    numberOfPassengers\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTrip($id: String!) {\n  deleteTrip(id: $id)\n}"): (typeof documents)["mutation DeleteTrip($id: String!) {\n  deleteTrip(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteMe {\n  deleteMe\n}"): (typeof documents)["mutation DeleteMe {\n  deleteMe\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllTrips {\n  trips {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n      firstname\n      lastname\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query GetAllTrips {\n  trips {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n      firstname\n      lastname\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetReviewsForUser($userId: Int!) {\n  reviewsForUser(userId: $userId) {\n    id\n    rating\n    comment\n    author {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query GetReviewsForUser($userId: Int!) {\n  reviewsForUser(userId: $userId) {\n    id\n    rating\n    comment\n    author {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTripById($id: String!) {\n  getTripById(id: $id) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query getTripById($id: String!) {\n  getTripById(id: $id) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTripsByDateAndLocations($date: DateTimeISO!, $startLocation: String!, $endLocation: String!) {\n  getTripsByDateAndLocations(\n    date: $date\n    startLocation: $startLocation\n    endLocation: $endLocation\n  ) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n      firstname\n      lastname\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query getTripsByDateAndLocations($date: DateTimeISO!, $startLocation: String!, $endLocation: String!) {\n  getTripsByDateAndLocations(\n    date: $date\n    startLocation: $startLocation\n    endLocation: $endLocation\n  ) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n      firstname\n      lastname\n    }\n    createdAt\n    updatedAt\n    passengers {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: UserLoginInput!) {\n  login(input: $input) {\n    token\n  }\n}"): (typeof documents)["mutation Login($input: UserLoginInput!) {\n  login(input: $input) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n    firstname\n    lastname\n    description\n    birthdate\n    phoneNumber\n    pictureUrl\n    reviewsAsTarget {\n      id\n      rating\n      comment\n    }\n    reviewsAsAuthor {\n      id\n      rating\n      comment\n    }\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n    firstname\n    lastname\n    description\n    birthdate\n    phoneNumber\n    pictureUrl\n    reviewsAsTarget {\n      id\n      rating\n      comment\n    }\n    reviewsAsAuthor {\n      id\n      rating\n      comment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($input: UserRegisterInput!) {\n  register(input: $input) {\n    token\n  }\n}"): (typeof documents)["mutation Register($input: UserRegisterInput!) {\n  register(input: $input) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation removeAPassanger($id: String!, $passengerId: String!) {\n  removeAPassanger(id: $id, passengerId: $passengerId) {\n    id\n  }\n}"): (typeof documents)["mutation removeAPassanger($id: String!, $passengerId: String!) {\n  removeAPassanger(id: $id, passengerId: $passengerId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTrip($id: String!, $data: TripUpdateInput!) {\n  updateTrip(id: $id, data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateTrip($id: String!, $data: TripUpdateInput!) {\n  updateTrip(id: $id, data: $data) {\n    id\n    date\n    price\n    status\n    startLocation\n    stopLocations\n    endLocation\n    driver {\n      id\n      email\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateMe($input: UserUpdateMe!) {\n  updateMe(input: $input) {\n    firstname\n    lastname\n    phoneNumber\n    birthdate\n    description\n    pictureUrl\n  }\n}"): (typeof documents)["mutation UpdateMe($input: UserUpdateMe!) {\n  updateMe(input: $input) {\n    firstname\n    lastname\n    phoneNumber\n    birthdate\n    description\n    pictureUrl\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;