import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import ProductCard from '../ProductCard';
import { SimilarProductHeader, SimilarProductListContainer } from './style';

import { SIMILAR_PRODUCTS_QUERY } from '../../api/query/product';

type Props = {
  categoryId: string
};

export default function SimilarProductList({ categoryId }: Props) {
  const { loading, error, data } = useQuery(SIMILAR_PRODUCTS_QUERY, {
    variables: {
      categoryId
    }
  });

  if (data && data.similarProducts && data.similarProducts.length > 0) {
    return (
      <>
        <SimilarProductHeader>
          Other products you might like
        </SimilarProductHeader>
        <SimilarProductListContainer>
          {data.similarProducts.map(
            ({ id, name, price, discountedPrice, images }) => {
              const productProps = {
                key: id,
                id,
                name,
                price,
                discountedPrice,
                imageUrl: images[0].url
              };
              return <ProductCard {...productProps} />;
            }
          )}
        </SimilarProductListContainer>
      </>
    );
  } else {
    return null;
  }
}
