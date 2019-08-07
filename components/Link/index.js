// @flow
import * as React from 'react';
import Link from 'next/link';

type Props = {
  children: React.Node,
  href: string,
  passHref?: boolean,
  role?: string
};

export default ({ children, href, ...props }: Props) => {
  return (
    <Link href={href} passHref {...props}>
      {children}
    </Link>
  );
};
