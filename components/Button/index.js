// @flow
import * as React from 'react';
import { Button, ButtonLinkStyle } from './style';

type Props = {
  title: string | number,
  role?: string,
  type?: string,
  size?: string,
  theme?: { [key: string]: any },
  onClick?: any => void,
  disabled?: boolean
};

export default ({ title, ...props }: Props) => (
  <Button role="button" {...props}>
    {title}
  </Button>
);

export const ButtonLink = React.forwardRef(
  ({ title, ...props }: Props, ref: any) => (
    <ButtonLinkStyle role="link" {...props} ref={ref}>
      {title}
    </ButtonLinkStyle>
  )
);
