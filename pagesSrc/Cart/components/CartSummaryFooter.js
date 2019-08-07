// @flow
import * as React from 'react';

import { ButtonLink } from '../../../components/Button';
import Link from '../../../components/Link';

import { CartSummaryFooterContainer } from '../style';

export default function CartSummaryFooter() {
  return (
    <CartSummaryFooterContainer>
      <Link href="/checkout">
        <ButtonLink title="Checkout" />
      </Link>
    </CartSummaryFooterContainer>
  );
}
