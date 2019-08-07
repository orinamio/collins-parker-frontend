import React from 'react';
import { render, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import formatToCurrencyLocale from '../../utils/formatToCurrencyLocale';

import ProductCard from './index.js';

jest.mock('../../utils/formatToCurrencyLocale', () =>
  jest.fn().mockImplementation(value => `$ ${value.toFixed(2)}`)
);

const setup = () => {
  const productProps = {
    id: '8403hfsifisfsfhihdfi',
    imageUrl: 'https://img.random.com/image.png',
    name: 'Nike Metcon 5',
    price: 180,
    discountedPrice: null
  };
  const utils = render(<ProductCard {...productProps} />);
  const productCard = utils.getByTestId('product-card');

  return {
    productProps,
    productCard,
    ...utils
  };
};

test('<ProductCard /> renders with image', async () => {
  const {
    getByAltText,
    productProps: { name }
  } = setup();
  const productImage = getByAltText(name);
  expect(productImage).toBeDefined();
});

test('<ProductCard /> renders with with the correct price', () => {
  const { getByTestId } = setup();
  const productPrice = getByTestId('product-card-price');
  expect(productPrice).toBeDefined();
  expect(productPrice.innerHTML).toBe('$ 180.00');
});
