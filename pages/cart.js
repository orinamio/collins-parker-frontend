// @flow
import * as React from 'react';

import CartContent from '../pagesSrc/Cart/components/CartContent';
import SimilarProductList from '../components/SimilarProductList';
import Page from '../components/Page';
import { PageBodyContainer } from '../pagesSrc/sharedStyle';

import { withAuth } from '../utils/auth';

function Cart() {
  const [categoryId, setCategoryId] = React.useState(
    'cjym8fthk02770881mhmi5xil'
  );

  return (
    <Page>
      <PageBodyContainer>
        <CartContent />
        <SimilarProductList categoryId={categoryId} />
      </PageBodyContainer>
    </Page>
  );
}

export default withAuth(Cart);
