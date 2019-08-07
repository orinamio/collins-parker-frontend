// @flow
import * as React from 'react';

import { CartSummaryListItemContainer, CartText } from '../style';

import formatToCurrencyLocale from '../../../utils/formatToCurrencyLocale';

type Props = {
  cartSummaryItem: { [key: any]: string }
};

export default function CartSummaryListItem({
  cartSummaryItem: { name, value }
}: Props) {
  return (
    <CartSummaryListItemContainer>
      <CartText>{name}</CartText>
      <CartText>{value ? formatToCurrencyLocale(+value) : value}</CartText>
    </CartSummaryListItemContainer>
  );
}
