import * as React from 'react';
import cookie from 'js-cookie';

const LoginStateContext = React.createContext();

function useLoginState() {
  const context = React.useContext(LoginStateContext);
  if (!context) {
    throw new Error(`useLoginState must be used within a LoginStateProvider`);
  }
  return context;
}

function LoginStateProvider(props) {
  const defaultValue = cookie.get('token') ? true : false;
  const [loginState, setLoginState] = React.useState(defaultValue);
  const value = React.useMemo(() => [loginState, setLoginState], [loginState]);

  return <LoginStateContext.Provider value={value} {...props} />;
}

export { LoginStateProvider, useLoginState };
