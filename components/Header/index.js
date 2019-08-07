// @flow
import * as React from 'react';
import Router from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { ApolloConsumer } from '@apollo/react-common';
import Downshift, { resetIdCounter } from 'downshift';

import Button from '../Button';
import IconCpLogo from '../Icons/CpLogo';
import IconSearch from '../Icons/Search';
import IconPerson from '../Icons/Person';
import IconHeart from '../Icons/Heart';
import IconBasket from '../Icons/Basket';
import IconMenu from '../Icons/Menu';
import IconClose from '../Icons/Close';
import Link from '../Link';
import {
  Header,
  CompanyName,
  LogoContainer,
  ButtonWrapper,
  AppHeaderTop,
  AppHeaderTopLinkContainer,
  AppHeaderTopLink,
  AppHeaderBottom,
  AppHeaderBottomLinkContainer,
  AppHeaderBottomLink,
  AppHeaderBottomLeft,
  AppHeaderBottomMiddle,
  AppHeaderBottomRight,
  AppHeaderSearchContainer,
  AppHeaderSearch,
  MobileSearchContainer,
  SearchResultContainer,
  SearchResultItem,
  SearchResultText,
  SearchResultTextLink,
  AppAuthHeader,
  CartCount,
  CartCountNumber,
  SidePanel,
  SidePanelLink,
  SidePanelCloseButton
} from './style';

import { SEARCH_QUERY } from '../../api/query/search';
import { CART_COUNT_QUERY } from '../../api/query/cart';
import routeNames from '../../configs/routeNames';
import { logout } from '../../utils/auth';
import { LoginStateProvider, useLoginState } from '../../context/loginState';
import { useSidePanelState } from '../../context/sidePanelState';
import getAuthHeader from '../../utils/getAuthHeader';

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
            <AppHeaderTopLink>Login</AppHeaderTopLink>
          </Link>
          <Link href="/signup">
            <AppHeaderTopLink>Sign up</AppHeaderTopLink>
          </Link>
        </>
      ) : (
        <AppHeaderTopLink onClick={handleLogout}>Logout</AppHeaderTopLink>
      )}
    </>
  );
};

export const BaseHeader = () => {
  const [sidePanelState, setSidePanelState] = useSidePanelState();
  const handleMenuIconClick = () => setSidePanelState(!sidePanelState);
  const [showSearch, setShowSearch] = React.useState(false);
  const handleSearchDisplay = () => setShowSearch(!showSearch);
  const searchNode = (
    <MobileSearchContainer>
      <Search />
      <ButtonWrapper onClick={handleSearchDisplay}>
        <IconClose width={22} />
      </ButtonWrapper>
    </MobileSearchContainer>
  );

  const context: { [key: string]: any } = getAuthHeader();
  const { data } = useQuery(CART_COUNT_QUERY, {
    context
  });
  const cartCount = data && data.cart && data.cart.count ? data.cart.count : 0;

  return (
    <Header>
      <AppHeaderTop>
        <Link href="/">
          <CompanyName transform="uppercase">Collins Parker</CompanyName>
        </Link>
        <LoginStateProvider>
          <ApolloConsumer>
            {client => (
              <AppHeaderTopLinkContainer>
                <AppHeaderTopLink>T & Cs</AppHeaderTopLink>
                <AppAuthLinks client={client} />
              </AppHeaderTopLinkContainer>
            )}
          </ApolloConsumer>
        </LoginStateProvider>
      </AppHeaderTop>
      <AppHeaderBottom>
        {!showSearch ? (
          <>
            <AppHeaderBottomLeft>
              <ButtonWrapper onClick={handleMenuIconClick}>
                <IconMenu width={22} />
              </ButtonWrapper>
              <Link href="/">
                <AppHeaderBottomLink>
                  <IconCpLogo type="secondary" width={22} />
                </AppHeaderBottomLink>
              </Link>
              <AppHeaderBottomLinkContainer>
                <Link href="/search?gender=female">
                  <AppHeaderBottomLink>Women</AppHeaderBottomLink>
                </Link>
                <Link href="/search?gender=male">
                  <AppHeaderBottomLink>Men</AppHeaderBottomLink>
                </Link>
              </AppHeaderBottomLinkContainer>
            </AppHeaderBottomLeft>
            <AppHeaderBottomMiddle>{searchNode}</AppHeaderBottomMiddle>
            <AppHeaderBottomRight>
              <Link href="/account">
                <AppHeaderBottomLink>
                  <IconPerson fill="white" height="24" />
                </AppHeaderBottomLink>
              </Link>
              <Link href="/saved-items">
                <AppHeaderBottomLink>
                  <IconHeart fill="white" height="24" />
                </AppHeaderBottomLink>
              </Link>
              <ButtonWrapper onClick={handleSearchDisplay}>
                <IconSearch fill="white" width={22} />
              </ButtonWrapper>
              <Link href="/cart">
                <AppHeaderBottomLink id="cart">
                  <CartCount>
                    <CartCountNumber>{cartCount}</CartCountNumber>
                  </CartCount>
                  <IconBasket fill="white" height="24" />
                </AppHeaderBottomLink>
              </Link>
            </AppHeaderBottomRight>
          </>
        ) : (
          searchNode
        )}
      </AppHeaderBottom>
    </Header>
  );
};

export const AuthHeader = () => {
  return (
    <Header>
      <AppAuthHeader>
        <Link href="/">
          <LogoContainer>
            <IconCpLogo width={22} />
            <CompanyName transform="uppercase">Collins Parker</CompanyName>
          </LogoContainer>
        </Link>
        <Button
          title="Go back"
          type="transparent"
          size="medium"
          onClick={() => Router.back()}
        />
      </AppAuthHeader>
    </Header>
  );
};

function Search() {
  resetIdCounter();

  return (
    <Downshift itemToString={item => (item ? item.name : '')}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        isOpen,
        getRootProps
      }) => (
        <AppHeaderSearchContainer {...getRootProps()}>
          <AppHeaderSearch prepend={<IconSearch />} {...getInputProps()} />
          {isOpen ? (
            <SearchResult
              {...{
                inputValue,
                selectedItem,
                highlightedIndex,
                getItemProps
              }}
            />
          ) : null}
        </AppHeaderSearchContainer>
      )}
    </Downshift>
  );
}

const SearchResult = ({
  inputValue,
  selectedItem,
  highlightedIndex,
  getItemProps
}) => {
  const {
    loading,
    error,
    data: { search }
  } = useQuery(SEARCH_QUERY, {
    variables: {
      searchString: inputValue,
      first: 10
    }
  });

  if (loading) {
    return (
      <SearchResultContainer>
        <SearchResultText>Searching...</SearchResultText>
      </SearchResultContainer>
    );
  }

  if (error || search.edges.length == 0) {
    return (
      <SearchResultContainer>
        <SearchResultText>
          Couldn't find what you are looking for... Try searching for else
        </SearchResultText>
      </SearchResultContainer>
    );
  }

  return (
    <SearchResultContainer>
      {search.edges.map(({ node: { id, name }, index }) => (
        <SearchResultItem
          {...getItemProps({
            item: {
              id,
              name
            },
            index,
            key: id
          })}
        >
          <Link
            href={`/${routeNames.product}/[id]`}
            as={`/${routeNames.product}/${id}`}
          >
            <SearchResultTextLink>
              <SearchResultText>{name}</SearchResultText>
            </SearchResultTextLink>
          </Link>
        </SearchResultItem>
      ))}
    </SearchResultContainer>
  );
};
