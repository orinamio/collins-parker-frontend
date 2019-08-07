// @flow
import * as React from 'react';

import { Image } from './style';

type Props = {
  imageProps: { [key: string]: any }
};

export default ({ imageProps }: Props) => (
  <Image {...imageProps} data-testid="image-element" />
);
