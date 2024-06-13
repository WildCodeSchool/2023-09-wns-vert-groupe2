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

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($input: UserChangePassword!) {
    changeMyPassword(input: $input) {
      id
    }
  }
`;

export const DELETE_ME_MUTATION = gql`
  mutation DeleteMe {
    deleteMe
  }
`;

export const UPDATE_ME_MUTATION = gql`
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
