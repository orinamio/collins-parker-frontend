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

import { SIGNUP_MUTATION } from '../../../api/mutation/auth';
import { LoginStateProvider, useLoginState } from '../../../context/loginState';

export default function SignupForm() {
  const [firstName, setFirstname] = React.useState('');
  const [lastName, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showpassword, toogleShowPassword] = React.useState(false);
  const [loginState, setLoginState] = useLoginState();
  const router = useRouter();

  const [signupUser, signupResult] = useMutation(SIGNUP_MUTATION);
  React.useEffect(() => {
    if (signupResult.error) {
      cogoToast.error("Couldn't signup user");
      return;
    }
    if (signupResult.data && signupResult.data.signup) {
      cookie.set('token', signupResult.data.signup.token);
      router.push('/account');
      setLoginState(true);
    }
  }, [signupResult, router, setLoginState]);

  const passwordIcon: React.Node = (
    <PasswordContainer onClick={() => toogleShowPassword(!showpassword)}>
      <IconPassword showpassword={showpassword} />
    </PasswordContainer>
  );
  const formInputEmpty: boolean = email == '' && password == '';
  const submitForm = e => {
    e.preventDefault();
    signupUser({
      variables: { firstName, lastName, email, password }
    });
  };

  return (
    <Form onSubmit={submitForm}>
      <FormField>
        <LabeledInput
          label="First Name"
          id="firstName"
          name="firstName"
          arial-label="First Name"
          type="text"
          required
          disabled={signupResult.loading}
          onChange={e => setFirstname(e.currentTarget.value)}
        />
      </FormField>
      <FormField>
        <LabeledInput
          label="Last name"
          id="lastName"
          name="lastName"
          arial-label="Last Name"
          type="text"
          required
          disabled={signupResult.loading}
          onChange={e => setLastname(e.currentTarget.value)}
        />
      </FormField>
      <FormField>
        <LabeledInput
          label="Email"
          id="email"
          name="email"
          arial-label="Email"
          type="email"
          required
          disabled={signupResult.loading}
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
          disabled={signupResult.loading}
          append={passwordIcon}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </FormField>
      <FormField>
        <Submit
          title={signupResult.loading ? 'Submitting...' : 'Signup'}
          disabled={formInputEmpty || signupResult.loading}
          type="submit"
        />
      </FormField>
    </Form>
  );
}
