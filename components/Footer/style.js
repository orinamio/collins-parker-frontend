import styled from 'styled-components';

import { A, H6 } from '../Typography';

import { media } from '../../configs/style';

export const Footer = styled.footer``;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.secondary};
  padding: 0.75rem 1rem;

  > h6 {
    font-size: 0.625rem;

    @media ${media.md} {
      font-size: 0.75rem;
    }
  }

  @media ${media.lg} {
    padding: 0.5rem 3rem;
  }
`;

export const SocialChannel = styled.div`
  display: flex;
`;

export const SocialChannelItem = styled(A)`
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  > svg {
    height: 1rem;
  }

  @media ${media.sm} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${media.md} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    > svg {
      height: 1.2rem;
    }
  }
`;

export const SiteNavigation = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  padding: 3rem 1rem;

  @media ${media.sm} {
    flex-direction: row;
    justify-content: space-around;
  }

  @media ${media.md} {
    padding: 5rem;
  }
`;

export const SiteNavigationColumm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  :not(:first-child) {
    margin-top: 2.5rem;

    @media ${media.sm} {
      margin-top: 0;
    }
  }
`;

export const SiteNavigationColummTitle = styled(H6)`
  font-size: 0.75rem;
  color: white;
`;

export const SiteNavigationColummList = styled.ul`
  margin-top: 0.75rem;
`;

export const SiteNavigationColummItem = styled.li`
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: capitalize;
  color: white;
  padding: 0.25rem 0;
  list-style-type: none;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0.75rem 1rem;

  @media ${media.lg} {
    padding: 0.5rem 3rem;
  }
`;

export const CopyrightRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 40%;
  > h6 {
    text-align: right;
    margin: 0 0.5rem;

    @media ${media.md} {
      margin: 0 1rem;
    }
  }
`;

export const CopyrightText = styled(H6)`
  font-size: 0.625rem;
`;
