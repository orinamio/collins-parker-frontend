import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
  mutation createOrder {
    createOrder {
      __typename
      id
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation cancelOrder($id: ID!) {
    cancelOrder(id: $id) {
      __typename
      id
    }
  }
`;
