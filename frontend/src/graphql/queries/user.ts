import { gql } from "@apollo/client";

export const ME = gql`
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
      createdAt
      updatedAt
    }
  }
`;
