// @flow
import * as React from 'react';

import AddToCartButton from './AddToCartButton';
import Image from '../../../components/Image';
import { LabeledInput } from '../../../components/Input';
import { LabeledSelect } from '../../../components/Select';
import Link from '../../../components/Link';
import {
  ProductContainer,
  LeftContainer,
  RightContainer,
  PrimaryImageContainer,
  SecondaryImageContainer,
  SecondaryImageItemContainer,
  TitleContainer,
  Title,
  ProductPrice,
  ProductCurrentPrice,
  ActionContainer,
  QuantityContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionContent,
  ProductText
} from '../style';

import formatToCurrencyLocale from '../../../utils/formatToCurrencyLocale';

type Props = {
  product: { [key: any]: any }
};

export default function ProductSection({
  product: { loading, error, data }
}: Props) {
  const [quantity, setQuantity] = React.useState(1);
  const [sizeId, setSizeId] = React.useState(null);

  if (loading) return <ProductText>Loading...</ProductText>;
  if (error) return <ProductText>Couldn't find product...</ProductText>;

  const {
    id,
    name,
    price,
    discountedPrice,
    description,
    images,
    sizes
  } = data.product;
  const [primaryImage, ...secondaryImages] = images;
  const sizeOptions = sizes.map(({ id, size }) => ({ value: id, text: size }));
  const addToCartProps = {
    productId: id,
    quantity,
    sizeId
  };

  return (
    <ProductContainer>
      <LeftContainer>
        <PrimaryImageContainer>
          <Image
            imageProps={{
              src: primaryImage.url,
              alt: name
            }}
          />
        </PrimaryImageContainer>
        <SecondaryImageContainer>
          {secondaryImages.map(image => (
            <SecondaryImageItemContainer key={image.id}>
              <Image
                imageProps={{
                  src: image.url,
                  alt: name
                }}
              />
            </SecondaryImageItemContainer>
          ))}
        </SecondaryImageContainer>
      </LeftContainer>
      <RightContainer>
        <TitleContainer>
          <Title>{name}</Title>
          <ProductPrice>
            <ProductCurrentPrice oldPrice={discountedPrice}>
              {price && formatToCurrencyLocale(price)}
            </ProductCurrentPrice>
            {discountedPrice && (
              <ProductCurrentPrice>
                {discountedPrice && formatToCurrencyLocale(discountedPrice)}
              </ProductCurrentPrice>
            )}
          </ProductPrice>
        </TitleContainer>
        <ActionContainer>
          <LabeledSelect
            id="size"
            label="Select size"
            defaultSelectOptionText="Pick a size"
            options={sizeOptions}
            onChange={e => setSizeId(e.currentTarget.value)}
          />
          <QuantityContainer>
            <LabeledInput
              label="Quantity"
              id="quantity"
              type="number"
              width={2}
              value={quantity}
              onChange={e => setQuantity(e.currentTarget.value)}
            />
          </QuantityContainer>
          <AddToCartButton {...addToCartProps} />
        </ActionContainer>

        <DescriptionContainer>
          <DescriptionTitle transform="uppercase">Description</DescriptionTitle>
          <DescriptionContent>{description}</DescriptionContent>
        </DescriptionContainer>
      </RightContainer>
    </ProductContainer>
  );
}
