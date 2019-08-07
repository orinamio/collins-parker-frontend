// @flow
import * as React from 'react';
import { ApolloConsumer } from '@apollo/react-common';

import IconClose from '../Icons/Close';
import Link from '../Link';
import {
  SidePanel,
  SidePanelLink,
  SidePanelCloseButton,
  SitePanelFooter
} from './style';

import { logout } from '../../utils/auth';
import { useLoginState } from '../../context/loginState';
import { useSidePanelState } from '../../context/sidePanelState';

type Props = {};

const AppAuthLinks = ({ client }: any) => {
  const [loginState, setLoginState] = useLoginState();
  const handleLogout = () => {
    setLoginState(false);
    logout();
    client.clearStore();
  };
  return (
    <>
      {!loginState ? (
        <>
          <Link href="/login">
            <SidePanelLink>Login</SidePanelLink>
          </Link>
          <Link href="/signup">
            <SidePanelLink>Sign up</SidePanelLink>
          </Link>
        </>
      ) : (
        <SidePanelLink onClick={handleLogout}>Logout</SidePanelLink>
      )}
    </>
  );
};

export default (props: Props) => {
  const [sidePanelState, setSidePanelState] = useSidePanelState();
  const handleCloseSidePanel = () => setSidePanelState(!sidePanelState);

  return (
    <SidePanel isOpen={sidePanelState} role="navigation">
      <SidePanelCloseButton onClick={handleCloseSidePanel}>
        <IconClose />
      </SidePanelCloseButton>
      <Link href="/search?gender=female">
        <SidePanelLink>Female</SidePanelLink>
      </Link>
      <Link href="/search?gender=male">
        <SidePanelLink>Male</SidePanelLink>
      </Link>
      <Link href="/saved-items">
        <SidePanelLink>Saved Items</SidePanelLink>
      </Link>
      <Link href="/account">
        <SidePanelLink>Account</SidePanelLink>
      </Link>
      <ApolloConsumer>
        {client => (
          <SitePanelFooter>
            <AppAuthLinks client={client} />
          </SitePanelFooter>
        )}
      </ApolloConsumer>
    </SidePanel>
  );
};
