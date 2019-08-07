// @flow
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';

import Image from '../../../components/Image';
import IconMinus from '../../../components/Icons/Minus';
import IconAdd from '../../../components/Icons/Add';
import Link from '../../../components/Link';
import {
  CartItemListItemContainer,
  CartText,
  CartItemImage,
  CartItemLeftContainer,
  CartItemRightContainer,
  CartCell
} from '../style';

import { CART_QUERY, CART_COUNT_QUERY } from '../../../api/query/cart';
import { REMOVE_ITEM_FROM_CART } from '../../../api/mutation/cart';
import routeNames from '../../../configs/routeNames';
import formatToCurrencyLocale from '../../../utils/formatToCurrencyLocale';
import getAuthHeader from '../../../utils/getAuthHeader';

type Props = {
  cartItemId: string,
  id: string,
  imageUrl: string,
  name: string,
  size: string,
  price: number,
  quantity: number,
  total: number
};

export default function CartItemListItem({
  cartItemId,
  id,
  imageUrl,
  name,
  size,
  price,
  quantity,
  total
}: Props) {
  const context: { [key: string]: any } = getAuthHeader();
  const [removeItemFromCart, removeItemFromCartResult] = useMutation(
    REMOVE_ITEM_FROM_CART,
    {
      variables: {
        cartItemId
      },
      context,
      refetchQueries: [
        {
          query: CART_QUERY,
          context
        },
        {
          query: CART_COUNT_QUERY,
          context
        }
      ]
    }
  );

  return (
    <CartItemListItemContainer>
      <CartItemLeftContainer>
        <Link
          href={`/${routeNames.product}/[id]`}
          as={`/${routeNames.product}/${id}`}
        >
          <CartItemImage>
            <Image
              imageProps={{
                src: imageUrl,
                alt: name
              }}
            />
          </CartItemImage>
        </Link>
        <CartText transform="uppercase">{name}</CartText>
      </CartItemLeftContainer>
      <CartItemRightContainer>
        <CartCell>
          <CartText>{size}</CartText>
        </CartCell>
        <CartCell>
          <CartText>{price ? formatToCurrencyLocale(price) : price}</CartText>
        </CartCell>
        <CartCell>
          <CartText>{quantity}</CartText>
        </CartCell>
        <CartCell>
          <CartText>{total ? formatToCurrencyLocale(total) : total}</CartText>
        </CartCell>
        <CartCell onClick={() => removeItemFromCart()} id="remove">
          {removeItemFromCartResult && removeItemFromCartResult.loading ? (
            <CartText>Removing...</CartText>
          ) : (
            <IconMinus width="18" height="18" />
          )}
        </CartCell>
      </CartItemRightContainer>
    </CartItemListItemContainer>
  );
}
