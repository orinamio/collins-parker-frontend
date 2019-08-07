import styled from 'styled-components';

import { A, H4, H6 } from '../../components/Typography';

import { media } from '../../configs/style';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  @media ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  min-height: 25rem;

  @media ${media.md} {
    flex: 0 0 45%;
    max-width: 15rem;
  }

  @media ${media.lg} {
    max-width: 20rem;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.md} {
    flex: auto;
    margin-left: 2rem;
  }
`;

export const PrimaryImageContainer = styled.div``;

export const SecondaryImageContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SecondaryImageItemContainer = styled.div`
  margin: 0 0.5rem;

  &:first-child {
    margin-left: 0;
  }

  > img {
    width: 4.5rem;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled(H4)`
  margin-bottom: 1rem;
`;

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

export const ActionContainer = styled.div`
  @media ${media.md} {
    margin-top: 2rem;
  }
`;

export const QuantityContainer = styled.div`
  margin: 2.5rem 0 1rem;
`;

export const DescriptionContainer = styled.div`
  margin-top: 3rem;
  @media ${media.md} {
    margin-top: 5rem;
  }
`;

export const DescriptionTitle = styled(H6)`
  font-size: 0.75rem;
`;

export const DescriptionContent = styled(H6)`
  margin-top: 0.5rem;
`;

export const ProductText = styled(H6)`
  margin: 1rem 0;
`;
