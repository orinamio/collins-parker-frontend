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

import { SAVED_ITEMS_QUERY } from '../api/query/savedItem';
import getAuthHeader from '../utils/getAuthHeader';
import { withAuth } from '../utils/auth';

function SavedItems() {
  const context: { [key: string]: any } = getAuthHeader();
  const { loading, error, data } = useQuery(SAVED_ITEMS_QUERY, {
    context
  });
  const dataReady: boolean = data && data.savedItems;

  return (
    <Page>
      <PageBodyContainer>
        <ProductsContainer>
          <ProductsHeaderContainer>
            <H5 fontWeight="heavy">Saved Items</H5>
          </ProductsHeaderContainer>
          <ProductListContainer>
            {loading && (
              <ProductEmpty>
                <H6>Loading...</H6>
              </ProductEmpty>
            )}
            {dataReady && !data.savedItems.edges.length > 0 && (
              <ProductEmpty>
                <H6>You've not saved any product...</H6>
              </ProductEmpty>
            )}
            {dataReady &&
              data.savedItems.edges.length > 0 &&
              data.savedItems.edges.map(
                ({
                  node: {
                    product: { id, name, price, discountedPrice, images }
                  }
                }) => {
                  const productProps: { [key: any]: any } = {
                    key: id,
                    id: id,
                    name,
                    price,
                    discountedPrice,
                    imageUrl: images[0].url,
                    hideQuickAction: true
                  };
                  return (
                    <ProductCardContainer key={id}>
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

export default withAuth(SavedItems);
