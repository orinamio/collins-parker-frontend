import * as React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/login');
  }
  return token;
};

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const logoutRedirect = () => Router.push('/');

/**
 *
 * @param {*} WrappedComponent
 * 1. authentication token if any
 * 2. Listens to logout event across all opened browser tabs
 */
export const withAuth = WrappedComponent =>
  class extends React.Component {
    static displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    componentDidMount() {
      window.addEventListener('storage', this.logoutUserAcrossTabs);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.logoutUserAcrossTabs);
    }

    logoutUserAcrossTabs = event => {
      if (event.key === 'logout') {
        logoutRedirect();
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export const logout = () => {
  cookie.remove('token');
  logoutRedirect();
};
