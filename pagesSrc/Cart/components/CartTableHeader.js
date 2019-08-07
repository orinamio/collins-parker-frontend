// @flow
import * as React from 'react';

import {
  CartTableHeaderContainer,
  CartText,
  CartItemLeftContainer,
  CartItemRightContainer,
  CartCell
} from '../style';

export default function CartTableHeader() {
  return (
    <CartTableHeaderContainer>
      <CartItemLeftContainer>
        <CartText transform="uppercase">Product</CartText>
      </CartItemLeftContainer>
      <CartItemRightContainer>
        <CartCell>
          <CartText transform="uppercase">Size</CartText>
        </CartCell>
        <CartCell>
          <CartText transform="uppercase">Price</CartText>
        </CartCell>
        <CartCell>
          <CartText transform="uppercase">Quantity</CartText>
        </CartCell>
        <CartCell>
          <CartText transform="uppercase">Total</CartText>{' '}
        </CartCell>
        <CartCell>
          <CartText transform="uppercase">Remove</CartText>
        </CartCell>
      </CartItemRightContainer>
    </CartTableHeaderContainer>
  );
}
