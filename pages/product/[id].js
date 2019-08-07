// @flow
import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import cogoToast from 'cogo-toast';

import Page from '../../components/Page';
import ProductSection from '../../pagesSrc/Product/components/ProductSection';
import { PageBodyContainer } from '../../pagesSrc/sharedStyle';

import { PRODUCT_QUERY } from '../../api/query/product';

export default function Product() {
  const {
    query: { id }
  } = useRouter();

  const product = useQuery(PRODUCT_QUERY, {
    variables: {
      id
    }
  });

  return (
    <Page>
      <PageBodyContainer>
        <ProductSection product={product} />
      </PageBodyContainer>
    </Page>
  );
}
