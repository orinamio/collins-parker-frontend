import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from '@apollo/react-common';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../configs/style';
import withApolloClient from '../api/withApolloClient';
import theme from '../theme';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
        <GlobalStyle />
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
