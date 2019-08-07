import gql from 'graphql-tag';

export const SAVE_ITEM = gql`
  mutation saveItem($productId: ID!) {
    saveItem(productId: $productId) {
      __typename
      id
    }
  }
`;

export const DELETE_SAVED_ITEM = gql`
  mutation deleteSavedItem($id: ID!) {
    deleteSavedItem(id: $id) {
      __typename
      id
    }
  }
`;
