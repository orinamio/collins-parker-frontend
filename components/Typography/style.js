import styled, { css } from 'styled-components';

import { media } from '../../configs/style';

export const H1Wrapper = styled.h1`
  font-size: 3rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
  ${props =>
    props.fontWeight == 'heavy' &&
    css`
      font-weight: 900;
    `};
  @media ${media.md} {
    font-size: 3.75rem;
  }
`;

export const H2Wrapper = styled.h2`
  font-size: 2rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
    ${props =>
      props.fontWeight == 'heavy' &&
      css`
        font-weight: 900;
      `};
  @media ${media.md} {
    font-size: 2.5rem;
  }
`;

export const H4Wrapper = styled.h4`
  font-size: 1.0075rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
    ${props =>
      props.fontWeight == 'heavy' &&
      css`
        font-weight: 900;
      `};
  @media ${media.md} {
    font-size: 1.25rem;
  }
`;

export const H5Wrapper = styled.h5`
  font-size: 0.875rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
    ${props =>
      props.fontWeight == 'heavy' &&
      css`
        font-weight: 900;
      `};
  @media ${media.md} {
    font-size: 1rem;
  }
`;

export const H6Wrapper = styled.h6`
  font-size:  0.75rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
    ${props =>
      props.fontWeight == 'heavy' &&
      css`
        font-weight: 900;
      `};
  @media ${media.md} {
    font-size: 0.875rem;
  }
`;

export const PWrapper = styled.p`
  font-size: 1rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
    ${props =>
      props.fontWeight == 'heavy' &&
      css`
        font-weight: 900;
      `};
`;

export const AWrapper = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
    ${props =>
      props.fontWeight == 'heavy' &&
      css`
        font-weight: 900;
      `};
  padding: calc(0.25rem * 2) 0.5rem 0.25rem;
  cursor: pointer;
`;

export const LabelWrapper = styled.label`
  font-size:  0.75rem;
  text-align ${props => props.align || 'left'};
  text-transform ${props => props.transform || 'none'};
  color: ${props => props.color || props.theme.colors.text.primary};
  
  @media ${media.md} {
    font-size: 0.8125rem;
  }
`;
