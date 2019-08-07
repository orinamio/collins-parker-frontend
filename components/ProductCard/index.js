//@flow
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import cogoToast from 'cogo-toast';

import IconHeart from '../Icons/Heart';
import Image from '../Image';
import Link from '../Link';
import {
  ProductCardContainer,
  ProductImageContainer,
  ProductImage,
  OnSale,
  OnSaleText,
  QuickActions,
  QuickActionText,
  QuickActionMenu,
  QuickAction,
  ProductDetailsContainer,
  ProductName,
  ProductPrice,
  ProductCurrentPrice,
  ProductDiscountedPrice
} from './style';

import { SAVE_ITEM } from '../../api/mutation/savedItem';
import { SAVED_ITEMS_QUERY } from '../../api/query/savedItem';
import routeNames from '../../configs/routeNames';
import getAuthHeader from '../../utils/getAuthHeader';
import formatToCurrencyLocale from '../../utils/formatToCurrencyLocale';

type Props = {
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  discountedPrice?: number,
  hideSaveIcon?: boolean,
  hideQuickAction?: boolean
};

export default function ProductCard({
  id,
  imageUrl,
  name,
  price,
  discountedPrice,
  hideSaveIcon,
  hideQuickAction
}: Props) {
  let quickActionText: string = 'Quick Actions';

  const [saveItem, saveItemResult] = useMutation(SAVE_ITEM);
  React.useEffect(() => {
    if (saveItemResult.error) {
      cogoToast.error("Couldn't save product.");
      return;
    }
    if (saveItemResult.data && saveItemResult.data.saveItem) {
      cogoToast.success('Saved');
    }
  }, [saveItemResult]);

  saveItemResult.loading
    ? (quickActionText = 'Saving...')
    : (quickActionText = 'Quick Actions');

  const productOnSale: boolean = discountedPrice
    ? discountedPrice > 0 && discountedPrice < price
    : false;
  const keepQuickActionsContainerOpenedAndDisabled: boolean =
    saveItemResult.loading;

  const context: { [key: string]: any } = getAuthHeader();
  const handleSaveItem: () => any = !keepQuickActionsContainerOpenedAndDisabled
    ? () =>
        saveItem({
          variables: { productId: id },
          context,
          refetchQueries: [
            {
              query: SAVED_ITEMS_QUERY,
              context
            }
          ]
        })
    : () => null;

  return (
    <ProductCardContainer data-testid="product-card">
      <ProductImageContainer>
        <Link
          href={`/${routeNames.product}/[id]`}
          as={`/${routeNames.product}/${id}`}
        >
          <ProductImage>
            <Image
              imageProps={{
                src: imageUrl,
                alt: name
              }}
            />
          </ProductImage>
        </Link>
        {productOnSale && (
          <OnSale>
            <OnSaleText align="center">On sale</OnSaleText>
          </OnSale>
        )}
        {!hideQuickAction ? (
          <QuickActions show={keepQuickActionsContainerOpenedAndDisabled}>
            <QuickActionText>{quickActionText}</QuickActionText>
            <QuickActionMenu>
              {!hideSaveIcon && (
                <QuickAction
                  onClick={handleSaveItem}
                  data-testid="product-card-save-item"
                >
                  <IconHeart fill="white" height="20" />
                </QuickAction>
              )}
            </QuickActionMenu>
          </QuickActions>
        ) : null}
      </ProductImageContainer>
      <ProductDetailsContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          <ProductCurrentPrice data-testid="product-card-price">
            {price && formatToCurrencyLocale(price)}
          </ProductCurrentPrice>
          {discountedPrice && (
            <ProductDiscountedPrice data-testid="product-card-discounted-price">
              {discountedPrice && formatToCurrencyLocale(discountedPrice)}
            </ProductDiscountedPrice>
          )}
        </ProductPrice>
      </ProductDetailsContainer>
    </ProductCardContainer>
  );
}
