import gql from 'graphql-tag';

export const ADD_TO_CART = gql`
  mutation addToCart($productId: ID!, $sizeId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, sizeId: $sizeId, quantity: $quantity) {
      __typename
      id
    }
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation removeItemFromCart($cartItemId: ID!) {
    removeItemFromCart(cartItemId: $cartItemId) {
      __typename
      success
    }
  }
`;
