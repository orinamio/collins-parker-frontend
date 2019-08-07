// @flow
import * as React from 'react';

import Head from '../Head';
import { BaseHeader, AuthHeader } from '../Header';
import { BaseFooter, AuthFooter } from '../Footer';
import PageOverlay from './PageOverlay';
import SidePanel from '../SidePanel';

import { LoginStateProvider } from '../../context/loginState';
import { SidePanelProvider } from '../../context/sidePanelState';

type Props = {
  children: React.Node,
  title?: string,
  head?: React.Node,
  pageType?: string
};

export default ({
  children,
  title = 'Collins Parker',
  head,
  pageType = 'base'
}: Props) => (
  <LoginStateProvider>
    <Head head={head} title={title} />
    <SidePanelProvider>
      <SidePanel />
      <PageOverlay />
      {pageType == 'base' ? <BaseHeader /> : <AuthHeader />}
    </SidePanelProvider>
    {children}
    {pageType == 'base' ? <BaseFooter /> : <AuthFooter />}
  </LoginStateProvider>
);
