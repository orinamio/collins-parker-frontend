// @flow
import * as React from 'react';

import { ButtonLink } from '../../../components/Button';
import Link from '../../../components/Link';
import { CartTableFooterContainer, CartText } from '../style';

export default function CartTableFooter() {
  return (
    <CartTableFooterContainer>
      <Link href="/search">
        <ButtonLink title="Continue Shopping" />
      </Link>
    </CartTableFooterContainer>
  );
}
