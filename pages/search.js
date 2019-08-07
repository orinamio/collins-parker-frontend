// @flow
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Page from '../components/Page';
import ProductCard from '../components/ProductCard';
import Select from '../components/Select';
import { H5, H6 } from '../components/Typography';
import {
  ProductFilterContainer,
  ProductFilter
} from '../pagesSrc/Search/style';
import {
  PageBodyContainer,
  ProductsContainer,
  ProductsHeaderContainer,
  ProductListContainer,
  ProductCardContainer,
  ProductEmpty
} from '../pagesSrc/sharedStyle';

import { FILTER_QUERY } from '../api/query/search';

const sortOrderOptions = [
  {
    value: 'price_DESC',
    text: 'High to Low'
  },
  {
    value: 'price_ASC',
    text: 'Low to High'
  }
];
export default function Search() {
  const { loading, error, data } = useQuery(FILTER_QUERY);
  const [sortOrder, setSortOrder] = React.useState(sortOrderOptions[0]);

  return (
    <Page>
      <PageBodyContainer>
        <ProductsContainer>
          <ProductsHeaderContainer>
            <H5 fontWeight="heavy">Search</H5>
          </ProductsHeaderContainer>
          {/* <ProductFilterContainer>
            <ProductFilter
              aria-label="Sort order"
              defaultSelectOptionText={
                sortOrderOptions && sortOrderOptions[0]
                  ? sortOrderOptions[0].text
                  : ''
              }
              options={sortOrderOptions}
              onChange={e => setSortOrder(e.currentTarget.value)}
            />
            <ProductFilter
              aria-label="Sort order"
              defaultSelectOptionText={
                sortOrderOptions && sortOrderOptions[0]
                  ? sortOrderOptions[0].text
                  : ''
              }
              options={sortOrderOptions}
              onChange={e => setSortOrder(e.currentTarget.value)}
            />
            <ProductFilter
              aria-label="Sort order"
              defaultSelectOptionText={
                sortOrderOptions && sortOrderOptions[0]
                  ? sortOrderOptions[0].text
                  : ''
              }
              options={sortOrderOptions}
              onChange={e => setSortOrder(e.currentTarget.value)}
            />
            <ProductFilter
              aria-label="Sort order"
              defaultSelectOptionText={
                sortOrderOptions && sortOrderOptions[0]
                  ? sortOrderOptions[0].text
                  : ''
              }
              options={sortOrderOptions}
              onChange={e => setSortOrder(e.currentTarget.value)}
            />
            <ProductFilter
              aria-label="Sort order"
              defaultSelectOptionText={
                sortOrderOptions && sortOrderOptions[0]
                  ? sortOrderOptions[0].text
                  : ''
              }
              options={sortOrderOptions}
              onChange={e => setSortOrder(e.currentTarget.value)}
            />
          </ProductFilterContainer> */}
          <ProductListContainer>
            {loading && (
              <ProductEmpty>
                <H6>Loading...</H6>
              </ProductEmpty>
            )}
            {data &&
              data.filter &&
              data.filter.edges.length > 0 &&
              data.filter.edges.map(
                ({
                  node: { id, name, price, discountedPrice, images },
                  index
                }) => {
                  const productProps: { [key: any]: any } = {
                    id: id,
                    name,
                    price,
                    discountedPrice,
                    imageUrl: images[0].url
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
