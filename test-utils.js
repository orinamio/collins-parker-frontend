import { render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/react-common';
import { ThemeProvider } from 'styled-components';

import withApolloClient from './api/withApolloClient';
import theme from './theme';

const Providers = ({ children, apolloClient }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloProvider>
  );
};

const Wrapper = withApolloClient(Providers);

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
