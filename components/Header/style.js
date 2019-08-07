import styled from 'styled-components';

import { A, H6 } from '../Typography';
import Input from '../Input';
import { inputHeight } from '../Input/style';

import { media } from '../../configs/style';

export const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const AppHeaderTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0.5rem 1.5rem;

  @media ${media.md} {
    padding: 0.25rem 2.25rem;
  }

  @media ${media.lg} {
    padding: 0.25rem 3rem;
  }
`;

export const CompanyName = styled(A)`
  font-size: 0.625rem;

  @media ${media.md} {
    font-size: 0.6875rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
`;

export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  padding: 0 0.75rem;
  outline: none;

  @media ${media.md} {
    display: none;
  }
`;

export const AppHeaderTopLinkContainer = styled.div`
  display: none;

  @media ${media.sm} {
    display: flex;
  }
`;

export const AppHeaderTopLink = styled(A)`
  font-size: 0.6875rem;
  text-transform: uppercase;
  margin-left: 0.875rem;
  transition: 0.5s;

  :hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

export const AppHeaderBottom = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  min-height: 3.75rem;
  padding: 0 0.5rem;

  @media ${media.md} {
    padding: 0.5rem 2.25rem;
  }

  @media ${media.lg} {
    padding: 0.5rem 3rem;
  }
`;

export const AppHeaderBottomLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 1 15%;

  a {
    padding: 0.75rem 1rem;
  }

  @media ${media.sm} {
    flex: 0 0 20%;
    margin: 0 0.75rem;
  }

  @media ${media.md} {
    justify-content: start;
  }
`;

export const AppHeaderBottomMiddle = styled.div`
  display: none;

  @media ${media.md} {
    display: flex;
    align-items: center;
    flex: 1 1 65%;
  }
`;

export const AppHeaderBottomRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 1 15%;

  > a {
    display: none;
  }

  #cart {
    display: flex;
  }

  @media ${media.sm} {
    display: flex;
    margin: 0 0.75rem;
    > a {
      :not(:last-child) {
        display: flex;
      }
    }
  }

  @media ${media.lg} {
    flex: 0 0 20%;
    > a {
      padding: 0.75rem;
      margin: 0 0.375rem;
    }
  }
`;

export const AppHeaderBottomLinkContainer = styled.div`
  display: none;

  @media ${media.md} {
    display: flex;
  }

  @media ${media.lg} {
    margin: 0 2rem;
  }
`;

export const AppHeaderBottomLink = styled(A)`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: white;
  padding: 0.75rem;
  position: relative;
  transition: 0.5s;

  :hover {
    background: rgba(75, 75, 75, 0.5);
  }
`;

export const AppHeaderSearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const AppHeaderSearch = styled(Input)``;

export const MobileSearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0.5rem;
  margin-right: 0;
`;

export const SearchResultContainer = styled.div`
  background: white;
  min-width: 100%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  top: ${inputHeight + 0.5}rem;
`;

export const SearchResultItem = styled.div`
  :hover {
    background: #f4f4f4;
  }
`;

export const SearchResultText = styled(H6)`
  font-size: 0.8rem;
  padding: 1rem;
`;

export const SearchResultTextLink = styled.a`
  text-decoration: none;
`;

export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  background: white;
  min-height: 1.1rem;
  min-width: 1.1rem;
  padding: 0.125rem;
  position: absolute;
  top: 0.25rem;
  right: 0;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
`;

export const CartCountNumber = styled(H6)`
  line-height: 1;
`;

export const AppAuthHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;
