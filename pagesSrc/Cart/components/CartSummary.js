// @flow
import * as React from 'react';

import CartSummaryHeader from './CartSummaryHeader';
import CartSummaryList from './CartSummaryList';
import CartSummaryFooter from './CartSummaryFooter';
import { CartSummaryContainer } from '../style';

type Props = {
  cartSummaryItems: Array<any>
};

export default function CartSummary({ cartSummaryItems }: Props) {
  return (
    <CartSummaryContainer>
      <CartSummaryHeader />
      <CartSummaryList cartSummaryItems={cartSummaryItems} />
      <CartSummaryFooter />
    </CartSummaryContainer>
  );
}
