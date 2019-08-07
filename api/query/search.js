import gql from 'graphql-tag';

import { PRODUCT_CARD_FRAGMENT } from '../fragment/product';

export const SEARCH_QUERY = gql`
  query search(
    $searchString: String!
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    search(
      searchString: $searchString
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const FILTER_QUERY = gql`
  query filter(
    $searchString: String
    $orderBy: String
    $gender: String
    $productType: String
    $size: String
    $price: String
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    filter(
      searchString: $searchString
      orderBy: $orderBy
      gender: $gender
      productType: $productType
      size: $size
      price: $price
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

export const SEARCH_FILTER_QUERY = gql`
  query searchFilterQuery {
    productSortOrder {
      order
    }
    gender {
      name
    }
    categories {
      __typename
      id
      name
    }
    sizes {
      __typename
      size
    }
    priceRange {
      range
    }
  }
`;
