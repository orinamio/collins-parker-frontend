import gql from 'graphql-tag';

export const ORDERS_QUERY = gql`
  query orders {
    orders {
      __typename
      id
      items {
        __typename
        id
        product {
          name
          images(first: 1) {
            url
          }
        }
        price
        quantity
        total
      }
      cancelled
      shippingFee
      subtotal
      total
    }
  }
`;
