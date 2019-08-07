import gql from 'graphql-tag';

export const PRODUCT_CARD_FRAGMENT = gql`
  fragment productCardFragment on Product {
    __typename
    id
    name
    price
    discountedPrice
    images(first: 1) {
      url
    }
  }
`;
