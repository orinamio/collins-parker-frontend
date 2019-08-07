import gql from 'graphql-tag';

import { USER_FRAGMENT } from '../fragment/user';

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      token
      user {
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

export const SIGNUP_MUTATION = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      __typename
      token
      user {
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;
