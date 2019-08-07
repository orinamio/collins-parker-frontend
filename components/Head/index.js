// @flow
import * as React from 'react';
import Head from 'next/head';

type Props = {
  head?: React.Node,
  title: string
};

export default ({ head, title }: Props) => (
  <>
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="static/images/favicon/site.webmanifest" />
      </Head>
    )}
  </>
);
