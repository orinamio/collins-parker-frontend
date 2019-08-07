import styled from 'styled-components';

import { A, H6 } from '../Typography';

export const SidePanel = styled.nav`
  display: flex;
  flex-direction: column;
  width: ${props => (props.isOpen ? 15 : 0)}rem;
  background-color: #1e1e1e;
  height: 100vh;
  padding-top: 3.75rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const SidePanelLink = styled(A)`
  color: white;
  padding: 1rem;
  transition: 0.3s;

  :hover {
    background: rgba(75, 75, 75, 0.5);
  }
`;

export const SidePanelCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const SitePanelFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;
