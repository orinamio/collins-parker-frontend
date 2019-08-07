// @flow
import * as React from 'react';

import CartSummaryListItem from './CartSummaryListItem';
import { CartSummaryListContainer, CartText } from '../style';

type Props = {
  cartSummaryItems: Array<any>
};

export default function CartSummaryList({ cartSummaryItems }: Props) {
  return (
    <CartSummaryListContainer>
      {cartSummaryItems &&
        cartSummaryItems.map(cartSummaryItem => (
          <CartSummaryListItem
            key={cartSummaryItem.name}
            cartSummaryItem={cartSummaryItem}
          />
        ))}
    </CartSummaryListContainer>
  );
}
