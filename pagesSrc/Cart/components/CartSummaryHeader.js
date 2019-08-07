// @flow
import * as React from 'react';

import { CartSummaryHeaderContainer, CartText } from '../style';

export default function CartSummaryHeader() {
  return (
    <CartSummaryHeaderContainer>
      <CartText transform="uppercase"> Your cart summary</CartText>
    </CartSummaryHeaderContainer>
  );
}
