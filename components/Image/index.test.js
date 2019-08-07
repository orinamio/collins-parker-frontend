import React from 'react';
import { render, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Image from './index.js';

const setup = () => {
  const imageProps = {
    imageUrl: 'https://img.random.com/image.png',
    alt: 'default image'
  };
  const utils = render(
    <Image
      imageProps={{
        src: imageProps.imageUrl,
        alt: imageProps.alt
      }}
    />
  );
  const imageNode = utils.getByAltText(imageProps.alt);

  return {
    imageProps,
    imageNode,
    ...utils
  };
};

test('<Image /> component returns an image element tag with "src" and "alt" attributes', () => {
  const { imageNode, imageProps } = setup();

  expect(imageNode).toBeInTheDocument();
  expect(imageNode).toHaveAttribute('src', imageProps.imageUrl);
  expect(imageNode).toHaveAttribute('alt', imageProps.alt);
});
