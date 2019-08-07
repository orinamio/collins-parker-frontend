import styled, { css } from 'styled-components';

import { Label as LabelWrapper } from '../Typography';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Label = styled(LabelWrapper)`
  margin-bottom: 0.2rem;
`;

export const inputHeight = 2.625;
export const inputPaddingX = 1;
const inputPrependAppendContainerSize = 1.4;

export const InputStyle = styled.input`
  font-size: 0.875rem;
  height: ${inputHeight}rem;
  padding-left: ${inputPaddingX}rem;
  padding-right: ${inputPaddingX}rem;
  border: 1px solid ${props => props.theme.colors.primary};
  position: relative;

  :placeholder {
    background: rgba(black, 0.5);
  }

  ${props =>
    props.width &&
    css`
      width: ${props.width}rem;
    `};

  ${props =>
    props.prepend &&
    css`
      padding-left: ${inputPaddingX * 2 + inputPrependAppendContainerSize}rem;
    `};

  ${props =>
    props.append &&
    css`
      padding-right: ${inputPaddingX * 2 + inputPrependAppendContainerSize}rem;
    `};
`;

export const Prepend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${inputPrependAppendContainerSize}rem;
  height: ${inputPrependAppendContainerSize}rem;
  position: absolute;
  top: ${(inputHeight - inputPrependAppendContainerSize) / 2}rem;
  left: ${inputPaddingX}rem;
  z-index: 1;
`;

export const Append = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${inputPrependAppendContainerSize}rem;
  height: ${inputPrependAppendContainerSize}rem;
  position: absolute;
  top: ${(inputHeight - inputPrependAppendContainerSize) / 2}rem;
  right: ${inputPaddingX}rem;
  z-index: 1;
`;
