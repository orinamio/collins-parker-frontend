// @flow
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cogoToast from 'cogo-toast';

import CartTable from './CartTable';
import CartSummary from './CartSummary';
import { CartContentContainer } from '../style';

import { CART_QUERY } from '../../../api/query/cart';
import getAuthHeader from '../../../utils/getAuthHeader';

export default function CartContent() {
  const context: { [key: string]: any } = getAuthHeader();
  const cartResult = useQuery(CART_QUERY, {
    context
  });
  const dataReady: boolean =
    cartResult &&
    cartResult.data &&
    cartResult.data.cart &&
    cartResult.data.cart.cart;

  const cartSummaryItems: Array<any> = [
    {
      name: 'Subtotal',
      value:
        dataReady && cartResult.data.cart.cart.subtotal
          ? cartResult.data.cart.cart.subtotal
          : 0
    },
    {
      name: 'Shipping',
      value:
        dataReady && cartResult.data.cart.cart.shippingFee
          ? cartResult.data.cart.cart.shippingFee
          : 0
    },
    {
      name: 'Total',
      value:
        dataReady && cartResult.data.cart.cart.total
          ? cartResult.data.cart.cart.total
          : 0
    }
  ];

  return (
    <CartContentContainer>
      <CartTable cartResult={cartResult} />
      <CartSummary cartSummaryItems={cartSummaryItems} />
    </CartContentContainer>
  );
}
