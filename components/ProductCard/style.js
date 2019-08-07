import styled, { css } from 'styled-components';

import { A, H6 } from '../Typography';

import { media } from '../../configs/style';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 130px;

  @media ${media.sm} {
    max-width: 145px;
  }
  @media ${media.md} {
    max-width: 180px;
  }
  @media ${media.lg} {
    max-width: 200px;
  }

  @media ${media.xl} {
    max-width: 280px;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProductImage = styled.div`
  background: #fafafa;
  width: 130px;
  min-height: 130px;
  cursor: pointer;

  @media ${media.sm} {
    width: 145px;
    min-height: 145px;
  }
  @media ${media.md} {
    width: 180px;
    min-height: 180px;
  }
  @media ${media.lg} {
    width: 200px;
    min-height: 200px;
  }

  @media ${media.xl} {
    width: 280px;
    min-height: 280px;
  }
`;

export const OnSale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const OnSaleText = styled(H6)`
  font-size: 0.5rem;
  color: white;
  text-transform: uppercase;

  @media ${media.sm} {
    font-size: 0.6125rem;
  }

  @media ${media.lg} {
    font-size: 0.75rem;
  }
`;

export const QuickActions = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: 0 0.75rem;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  ${props =>
    props.show &&
    css`
      display: flex;
    `};

  @media ${media.md} {
    padding: 0.5rem 0.75rem;
  }

  ${ProductImageContainer}:hover & {
    display: flex;
  }
`;

export const QuickActionText = styled(OnSaleText)``;

export const QuickActionMenu = styled.div`
  display: flex;

  svg {
    width: 1rem;
  }

  @media ${media.md} {
    svg {
      width: 1.75rem;
    }
  }
`;

export const QuickAction = styled(A)`
  padding: 0.5rem;
`;

export const ProductDetailsContainer = styled.div`
  margin-top: 0.75rem;
`;

export const ProductName = styled(H6)``;

export const ProductPrice = styled.div`
  margin-top: 0.25rem;
`;

export const ProductCurrentPrice = styled(H6)`
  ${props =>
    props.oldPrice &&
    css`
      color: red;
    `};
`;

export const ProductDiscountedPrice = styled(H6)``;
