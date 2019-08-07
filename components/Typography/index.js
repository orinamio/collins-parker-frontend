// @flow
import * as React from 'react';
import {
  H1Wrapper,
  H2Wrapper,
  H4Wrapper,
  H5Wrapper,
  H6Wrapper,
  PWrapper,
  AWrapper,
  LabelWrapper
} from './style';

type Props = {
  children: React.Node,
  align?: string,
  transform?: string,
  color?: string,
  fontWeight?: string,
  theme?: { [key: string]: any }
};

export const H1 = ({ children, ...props }: Props) => (
  <H1Wrapper {...props}>{children}</H1Wrapper>
);

export const H2 = ({ children, ...props }: Props) => (
  <H2Wrapper {...props}>{children}</H2Wrapper>
);

export const H4 = ({ children, ...props }: Props) => (
  <H4Wrapper {...props}>{children}</H4Wrapper>
);

export const H5 = ({ children, ...props }: Props) => (
  <H5Wrapper {...props}>{children}</H5Wrapper>
);

export const H6 = ({ children, ...props }: Props) => (
  <H6Wrapper {...props}>{children}</H6Wrapper>
);

export const P = ({ children, ...props }: Props) => (
  <PWrapper {...props}>{children}</PWrapper>
);

export const A = React.forwardRef(({ children, ...props }: Props, ref: any) => (
  <AWrapper {...props} ref={ref}>
    {children}
  </AWrapper>
));

export const Label = ({ children, ...props }: Props) => (
  <LabelWrapper {...props}>{children}</LabelWrapper>
);
