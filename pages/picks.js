// @flow
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Page from '../components/Page';
import ProductCard from '../components/ProductCard';
import {
  PageBodyContainer,
  ProductsContainer,
  ProductsHeaderContainer,
  ProductListContainer,
  ProductCardContainer,
  ProductEmpty
} from '../pagesSrc/sharedStyle';
import { H5, H6 } from '../components/Typography';

import { PRODUCTS_QUERY } from '../api/query/product';

export default function Picks() {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
    variables: {
      first: 10
    }
  });

  return (
    <Page>
      <PageBodyContainer>
        <ProductsContainer>
          <ProductsHeaderContainer>
            <H5 fontWeight="heavy">Picks</H5>
          </ProductsHeaderContainer>
          <ProductListContainer>
            {loading && (
              <ProductEmpty>
                <H6>Loading...</H6>
              </ProductEmpty>
            )}
            {data &&
              data.products &&
              data.products.edges.length > 0 &&
              data.products.edges.map(
                ({ node: { id, name, price, discountedPrice, images } }) => {
                  const productProps = {
                    key: id,
                    id,
                    name,
                    price,
                    discountedPrice,
                    imageUrl: images[0].url
                  };
                  return (
                    <ProductCardContainer>
                      <ProductCard {...productProps} />
                    </ProductCardContainer>
                  );
                }
              )}
          </ProductListContainer>
        </ProductsContainer>
      </PageBodyContainer>
    </Page>
  );
}
