import styled from 'styled-components';

import { A, H6 } from '../../components/Typography';

import { media } from '../../configs/style';

const BaseHeaderStyle = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
`;

const BaseFooterStyle = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const CartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  @media ${media.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CartTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  @media ${media.lg} {
    flex: 0 0 60%;
  }
`;

export const CartTableHeaderContainer = styled(BaseHeaderStyle)``;

export const CartTableFooterContainer = styled(BaseFooterStyle)``;

export const CartItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
`;

export const CartItemListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

export const CartItemLeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 50%;
`;

export const CartItemRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 1 50%;

  @media ${media.sm} {
    > div {
      padding: 0.5rem;
    }
  }
`;

export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.lg} {
    flex: 0 0 27.5%;
  }
`;

export const CartSummaryHeaderContainer = styled(BaseHeaderStyle)`
  padding: 0.5rem 0;
`;

export const CartSummaryFooterContainer = styled(BaseFooterStyle)`
  > button {
    width: 100%;
    max-width: 20rem;
  }
`;

export const CartSummaryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0;
`;

export const CartSummaryListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
`;

export const CartEmpty = styled.div`
  padding: 1.25rem 0;
`;

export const CartItemImage = styled.div`
  min-height: 3rem;
  cursor: pointer;

  > img {
    width: 2.5rem;
    margin-right: 0.5rem;
  }

  @media ${media.sm} {
    > img {
      width: 4rem;
      margin-right: 1rem;
    }
  }
`;

export const CartCell = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;

  &#remove {
    cursor: pointer;
  }
`;

export const CartText = styled(H6)`
  font-size: 0.5rem;

  @media ${media.sm} {
    font-size: 0.75rem;
  }
`;
