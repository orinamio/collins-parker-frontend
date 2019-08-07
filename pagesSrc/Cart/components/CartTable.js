// @flow
import * as React from 'react';

import CartTableHeader from './CartTableHeader';
import CartItemList from './CartItemList';
import CartTableFooter from './CartTableFooter';
import {
  CartTableContainer,
  CartEmpty,
  CartItemListItemContainer,
  CartText
} from '../style';

type Props = {
  cartResult: { [key: any]: any }
};

export default function CartTable({ cartResult }: Props) {
  const { loading, error, data } = cartResult;
  const itemsExist: boolean =
    data && data.cart && data.cart.cart && data.cart.cart.items;

  const empty: React.Node = (
    <CartEmpty>
      <CartText> Nothing here...</CartText>
    </CartEmpty>
  );

  function frame(children: React.Node) {
    return (
      <CartTableContainer>
        <CartTableHeader />
        {children}
        <CartTableFooter />
      </CartTableContainer>
    );
  }

  if (loading)
    return frame(
      <CartEmpty>
        <CartText> Loading...</CartText>
      </CartEmpty>
    );

  if (error) return frame(empty);

  if (itemsExist && data.cart.cart.items.length > 0) {
    return frame(<CartItemList cartItems={data.cart.cart.items} />);
  } else {
    return frame(empty);
  }
}
