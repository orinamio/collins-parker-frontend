import gql from 'graphql-tag';

import { PRODUCT_CARD_FRAGMENT } from '../fragment/product';

export const SAVED_ITEMS_QUERY = gql`
  query savedItems {
    savedItems {
      __typename
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          product {
            ...productCardFragment
          }
        }
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;
