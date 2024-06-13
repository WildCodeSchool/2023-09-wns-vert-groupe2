import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation Register($input: UserRegisterInput!) {
    register(input: $input) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($input: UserLoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
