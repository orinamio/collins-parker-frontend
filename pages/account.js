// @flow
import * as React from 'react';

import Page from '../components/Page';
import { H5 } from '../components/Typography';
import { PageBodyContainer } from '../pagesSrc/sharedStyle';

import { withAuth } from '../utils/auth';

function Account(props) {
  return (
    <Page>
      <PageBodyContainer>
        <H5 fontWeight="heavy">Hi, this page is under construction...</H5>
      </PageBodyContainer>
    </Page>
  );
}

export default withAuth(Account);
