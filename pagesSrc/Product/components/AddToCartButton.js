// @flow
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import cogoToast from 'cogo-toast';

import Button from '../../../components/Button';

import { ADD_TO_CART } from '../../../api/mutation/cart';
import { CART_QUERY, CART_COUNT_QUERY } from '../../../api/query/cart';
import getAuthHeader from '../../../utils/getAuthHeader';

type Props = {
  productId: string,
  sizeId: string | null,
  quantity: number
};

export default function AddToCartButton({
  productId,
  sizeId,
  quantity
}: Props) {
  let buttonTitle: string = 'Add to Cart';

  const context: { [key: string]: any } = getAuthHeader();
  const [addToCart, addToCartResult] = useMutation(ADD_TO_CART);

  React.useEffect(() => {
    if (addToCartResult.error) {
      cogoToast.error("Couldn't add product to cart");
      return;
    }
    if (addToCartResult.data && addToCartResult.data.addToCart) {
      cogoToast.success('Added to cart');
    }
  }, [addToCartResult]);

  if (addToCartResult.loading) {
    buttonTitle = 'Adding to cart...';
  } else {
    buttonTitle = 'Add to Cart';
  }

  const onClickAddToCart = () => {
    const token = context.headers['Authorization'].split(' ')[1];

    if (!token) {
      cogoToast.info('Sign in to add item to cart');
      return;
    }

    if (!sizeId) {
      cogoToast.info('Select a size');
      return;
    }

    addToCart({
      variables: { productId, sizeId, quantity: +quantity },
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
    });
  };

  return (
    <Button
      title={buttonTitle}
      onClick={onClickAddToCart}
      disabled={addToCartResult.loading}
    />
  );
}
