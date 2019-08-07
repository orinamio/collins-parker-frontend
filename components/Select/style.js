import styled, { css } from 'styled-components';

import { H6 } from '../Typography';
import { inputHeight, inputPaddingX } from '../Input/style';

export const SelectStyle = styled.select`
  font-size: 0.875rem;
  background-color: white;
  height: ${inputHeight}rem;
  width: 100%;
  max-width: 10rem;
  padding-left: ${inputPaddingX}rem;
  padding-right: ${inputPaddingX}rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :placeholder {
    background: rgba(black, 0.5);
  }

  ${props =>
    props.width &&
    css`
      width: ${props.width}rem;
    `};
`;

export const Option = styled.option``;
