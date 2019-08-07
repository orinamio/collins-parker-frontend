// @flow
import * as React from 'react';

import Link from '../components/Link';
import SignupForm from '../pagesSrc/Signup/components/SignupForm';
import Page from '../components/Page';
import { A } from '../components/Typography';
import { FormTitle } from '../pagesSrc/Auth/style';
import { Main } from '../pagesSrc/sharedStyle';

import { LoginStateProvider, useLoginState } from '../context/loginState';

export default function Signup() {
  return (
    <Page pageType="auth">
      <Main>
        <FormTitle>Sign up</FormTitle>
        <LoginStateProvider>
          <SignupForm />
        </LoginStateProvider>
        <Link href="/login">
          <A>Already have an account? Sign in</A>
        </Link>
      </Main>
    </Page>
  );
}
