import styled from 'styled-components';

import { media } from '../configs/style';

const SharedMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.75rem 1rem;
`;

export const Main = styled(SharedMain)`
  align-items: center;
  justify-content: center;
`;

export const PageBodyContainer = styled(SharedMain)`
  max-width: 1440px;
  padding: 2rem 1rem;

  @media ${media.sm} {
    padding: 2.5rem 2rem;
  }

  @media ${media.md} {
    padding: 2.5rem 3rem;
  }

  @media ${media.lg} {
    padding: 3rem 6rem;
  }

  @media ${media.xxl} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsHeaderContainer = styled.div`
  padding: 0 1rem;
`;

export const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductCardContainer = styled.div`
  padding: 1rem;
`;

export const ProductEmpty = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
`;
