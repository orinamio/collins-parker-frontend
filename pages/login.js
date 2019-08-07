// @flow
import * as React from 'react';

import Link from '../components/Link';
import LoginForm from '../pagesSrc/Login/components/LoginForm';
import Page from '../components/Page';
import { A } from '../components/Typography';
import { FormTitle } from '../pagesSrc/Auth/style';
import { Main } from '../pagesSrc/sharedStyle';

import { LoginStateProvider } from '../context/loginState';

export default function Login() {
  return (
    <Page pageType="auth">
      <Main>
        <FormTitle>Log in</FormTitle>
        <LoginStateProvider>
          <LoginForm />
        </LoginStateProvider>
        <Link href="/signup">
          <A>New to Collins Parker? Sign up</A>
        </Link>
      </Main>
    </Page>
  );
}
