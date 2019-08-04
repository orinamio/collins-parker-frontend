// @flow

import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';

const H1 = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const P = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Index() {
  return (
    <Page>
      <H1>Next App</H1>
      <P>Wired up with Next.js, Apollo and Styled Components</P>
    </Page>
  );
}
