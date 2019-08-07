import gql from 'graphql-tag';

import { PRODUCT_CARD_FRAGMENT } from '../fragment/product';

export const CART_QUERY = gql`
  query cart {
    cart {
      cart {
        __typename
        items {
          __typename
          id
          product {
            ...productCardFragment
          }
          size {
            size
          }
          quantity
          total
        }
        subtotal
        shippingFee
        total
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

export const CART_COUNT_QUERY = gql`
  query cart {
    cart {
      count
    }
  }
`;
