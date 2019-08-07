import React, { Component } from 'react';
import Head from 'next/head';
import { getDataFromTree } from '@apollo/react-ssr';

import apolloInit from './apolloInit';

export default App => {
  return class WithApolloClient extends Component {
    static displayName = 'WithApolloClient(App)';
    static async getInitialProps(ctx) {
      const { AppTree } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const apollo = apolloInit();
      if (typeof window === 'undefined') {
        try {
          await getDataFromTree(
            <AppTree {...appProps} apolloClient={apollo} />
          );
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error);
        }

        Head.rewind();
      }

      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = apolloInit(props.apolloState);
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
