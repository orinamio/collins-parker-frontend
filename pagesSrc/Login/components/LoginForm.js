// @flow
import * as React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import cogoToast from 'cogo-toast';
import cookie from 'js-cookie';

import IconPassword from '../../../components/Icons/Password';
import { LabeledInput } from '../../../components/Input';
import { Form, FormField, Submit, PasswordContainer } from '../../Auth/style';
import { Main } from '../../sharedStyle';

import { LOGIN_MUTATION } from '../../../api/mutation/auth';
import { LoginStateProvider, useLoginState } from '../../../context/loginState';

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showpassword, toogleShowPassword] = React.useState(false);
  const [loginState, setLoginState] = useLoginState();
  const router = useRouter();

  const [loginUser, loginResult] = useMutation(LOGIN_MUTATION);
  React.useEffect(() => {
    if (loginResult.error) {
      cogoToast.error('Invalid username or password');
      return;
    }
    if (loginResult.data && loginResult.data.login) {
      cookie.set('token', loginResult.data.login.token);
      router.back();
      setLoginState(true);
    }
  }, [loginResult, router, setLoginState]);

  const passwordIcon: React.Node = (
    <PasswordContainer onClick={() => toogleShowPassword(!showpassword)}>
      <IconPassword showpassword={showpassword} />
    </PasswordContainer>
  );
  const formInputEmpty: boolean = email == '' && password == '';
  const submitForm = e => {
    e.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <Form onSubmit={submitForm}>
      <FormField>
        <LabeledInput
          label="Email"
          id="email"
          name="email"
          arial-label="Email"
          type="email"
          required
          disabled={loginResult.loading}
          onChange={e => setEmail(e.currentTarget.value)}
        />
      </FormField>
      <FormField>
        <LabeledInput
          label="Password"
          id="password"
          name="password"
          arial-label="Password"
          type={showpassword ? 'text' : 'password'}
          required
          disabled={loginResult.loading}
          append={passwordIcon}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </FormField>
      <FormField>
        <Submit
          title={loginResult.loading ? 'Submitting...' : 'Login'}
          disabled={formInputEmpty || loginResult.loading}
          type="submit"
        />
      </FormField>
    </Form>
  );
}
