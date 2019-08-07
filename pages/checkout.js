// @flow
import * as React from 'react';

import Page from '../components/Page';
import { H5, H6 } from '../components/Typography';
import { PageBodyContainer } from '../pagesSrc/sharedStyle';
import ShippingAddressForm from '../pagesSrc/Checkout/components/ShippingAddressForm';

import { withAuth } from '../utils/auth';

function Checkout(props) {
  return (
    <Page>
      <PageBodyContainer>
        <H5 fontWeight="heavy">Checkout</H5>
        <br />
        <H6 fontWeight="heavy">Work in progress...</H6>
        {/* <ShippingAddressForm /> */}
      </PageBodyContainer>
    </Page>
  );
}

export default withAuth(Checkout);
