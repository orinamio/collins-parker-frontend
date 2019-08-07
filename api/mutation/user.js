import gql from 'graphql-tag';

import { USER_FRAGMENT } from '../fragment/user';

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String, $lastName: String) {
    updateUser(firstName: $firstName, lastName: $lastName) {
      __typename
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const DEACTIVATE_USER = gql`
  mutation deactivateUser($id: ID!) {
    deactivateUser(id: $id) {
      __typename
      id
    }
  }
`;
