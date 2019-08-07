import { createGlobalStyle } from 'styled-components';

export const screenSizes = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1881px'
};

export const media = {
  xs: `(min-width: ${screenSizes.xs})`,
  sm: `(min-width: ${screenSizes.sm})`,
  md: `(min-width: ${screenSizes.md})`,
  lg: `(min-width: ${screenSizes.lg})`,
  xl: `(min-width: ${screenSizes.xl})`,
  xxl: `(min-width: ${screenSizes.xxl})`
};

export const GlobalStyle = createGlobalStyle`
  @import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";

  @font-face {
    font-family: 'Avenir';
    src: local('AvenirLTStd-Medium'),
      url('../static/fonts/AvenirLTStd-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir';
    src: local('AvenirLTStd-Book'),
      url('../static/fonts/AvenirLTStd-Book.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir';
    src: local('AvenirLTStd-Heavy'),
      url('../static/fonts/AvenirLTStd-Heavy.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    outline-color: black;
    outline-offset: -1px;
    outline-width: 2px;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
