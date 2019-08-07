// @flow
import * as React from 'react';

import CartItemListItem from './CartItemListItem';
import { CartItemListContainer } from '../style';

type Props = {
  cartItems: Array<any>
};

export default function CartItemList({ cartItems }: Props) {
  return (
    <CartItemListContainer>
      {cartItems &&
        cartItems.map(
          ({
            id,
            product: { images, name, price, ...product },
            size: { size },
            quantity,
            total
          }) => {
            const cartItemProps: { [key: any]: any } = {
              key: id,
              cartItemId: id,
              id: product.id,
              imageUrl: images[0].url,
              name,
              size,
              price,
              quantity,
              total
            };
            return <CartItemListItem {...cartItemProps} />;
          }
        )}
    </CartItemListContainer>
  );
}
