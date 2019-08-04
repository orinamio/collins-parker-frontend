// @flow

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

// type Props = {
//   children: Node,
//   title?: string,
//   head?: Node
// };

export default ({ children, title = 'Collins Parker', head }) => (
  <div>
    {head ? (
      head
    ) : (
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
    )}

    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>{'I`m here to stay'}</footer>
  </div>
);
