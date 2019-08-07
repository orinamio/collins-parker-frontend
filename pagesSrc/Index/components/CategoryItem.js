//@flow
import * as React from 'react';

import Image from '../../../components/Image';
import Link from '../../../components/Link';

import { Category, CategoryImage, CategoryName } from '../style';

type Props = {
  url: string,
  name: string
};

export default function CategoriesResult({ url, name }: Props) {
  return (
    <Link href={`/search?category=${name}`}>
      <Category>
        <CategoryImage>
          <Image
            imageProps={{
              src: url,
              alt: name
            }}
          />
        </CategoryImage>

        <CategoryName transform="uppercase">{name}</CategoryName>
      </Category>
    </Link>
  );
}
