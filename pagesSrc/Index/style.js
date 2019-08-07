import styled from 'styled-components';

import { ButtonLink } from '../../components/Button';
import { H6, A } from '../../components/Typography';

import { media } from '../../configs/style';

export const PageContent = styled.main``;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #ffafaf;

  > h6 {
    font-size: 0.625rem;
    text-align: center;

    @media ${media.md} {
      font-size: 0.875rem;
    }
  }
`;

export const MainContainer = styled.div`
  margin: 1rem;
`;

export const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  background-image: url('static/images/landing/landing-image-small.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  overflow: hidden;

  @media ${media.sm} {
    background-image: url('static/images/landing/landing-image-medium.png');
  }

  @media ${media.lg} {
    background-image: url('static/images/landing/landing-image-large.png');
  }

  @media ${media.xl} {
    background-image: url('static/images/landing/landing-image.png');
  }
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;

  @media ${media.md} {
    padding: 3rem;
  }
`;

export const LandingContentDescription = styled(H6)`
  margin-top: 0.5rem;
`;

export const LandingActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media ${media.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LandingActionButton = styled(ButtonLink)`
  width: 100%;
  min-width: 12.5rem;
  :not(:first-child) {
    margin-top: 0.75rem;
  }
  @media ${media.sm} {
    width: initial;
    :not(:first-child) {
      margin-top: 0
    }
`;

export const CategoriesContainer = styled.div`
  padding: 1.5rem 0;
  @media ${media.md} {
    padding: 2.5rem 1.5rem;
  }
  @media ${media.lg} {
    padding: 2.5rem;
  }
`;

export const Categories = styled.div`
  display: flex;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${media.lg} {
    margin: 0.3125rem 0 1rem;
  }
`;

export const Category = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin: 1rem 0.5rem;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

export const CategoryImage = styled.div`
  width: 100px;

  @media ${media.md} {
    width: 150px;
  }

  @media ${media.lg} {
    width: 200px;
  }
`;

export const CategoryName = styled(H6)`
  font-size: 0.75rem;
  margin-top: 0.625rem;
`;

export const Picks = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Pick = styled(A)`
  margin-bottom: 1rem;
  position: relative;

  @media ${media.sm} {
    flex: 0 1 49.5%;
    margin-bottom: 0;
  }
`;

export const PickButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  @media ${media.lg} {
    font-size: 0.875rem;
  }
`;

export const PickButton = styled(ButtonLink)`
  font-size: 0.625rem;
  min-width: unset;

  @media ${media.sm} {
    font-size: 0.75rem;
    min-width: 220px;
  }

  :hover {
    color: ${props => props.theme.colors.primary};
    background: white;
    border: 1px solid white;
  }
`;
