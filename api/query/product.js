import gql from 'graphql-tag';

import { PRODUCT_CARD_FRAGMENT } from '../fragment/product';

export const SIMILAR_PRODUCTS_QUERY = gql`
  query similarProducts($categoryId: String!) {
    similarProducts(categoryId: $categoryId) {
      ...productCardFragment
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

export const PRODUCTS_QUERY = gql`
  query products(
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    products(
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...productCardFragment
        }
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

export const PRODUCT_QUERY = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      sku
      price
      discountedPrice
      category {
        __typename
        name
      }
      sizes {
        __typename
        id
        size
      }
      images {
        __typename
        id
        url
      }
      description
    }
  }
`;
