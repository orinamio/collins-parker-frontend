import styled, { css } from 'styled-components';

export const PageOverlay = styled.div`
  display: none;
  width: 100%;
  min-height: 100%;
  position: absolute;
  ${props =>
    props.menuIsOpen &&
    css`
      display: block;
      background: rgba(0, 0, 0, 0.4);
      z-index: 2;
    `}
`;
