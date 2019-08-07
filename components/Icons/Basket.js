import React from 'react';

const SvgBasket = props => (
  <svg width={33.789} height={30} viewBox="0 0 33.789 30" {...props}>
    <defs>
      <clipPath id="basket_svg__a">
        <path fill="none" d="M0 0h33.789v30H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#basket_svg__a)">
      <path d="M25.391 13.778a1.111 1.111 0 111.107 1.111 1.112 1.112 0 01-1.107-1.111zM6.176 13.778a1.111 1.111 0 111.111 1.111 1.112 1.112 0 01-1.111-1.111z" />
      <path
        d="M6.75 10h-5.4a1.374 1.374 0 00-.95.333 1.208 1.208 0 00-.4.917 1.507 1.507 0 00.106.544l6.427 16.812A2.173 2.173 0 008.561 30h16.678a2.283 2.283 0 002.011-1.383c0-.006.006-.006.006-.011l6.428-16.811a1.507 1.507 0 00.106-.544 1.208 1.208 0 00-.4-.917 1.374 1.374 0 00-.95-.333h-5.4a1.094 1.094 0 00-.072-.233L23.21.911a.02.02 0 01-.006-.017 1.5 1.5 0 00-.556-.633 1.461 1.461 0 00-.8-.261h-9.887a1.5 1.5 0 00-1.378.911L6.822 9.767A1.094 1.094 0 006.75 10zm1.177 0h17.934l-3.678-8.65a.352.352 0 00-.15-.161.364.364 0 00-.211-.078h-9.861a.39.39 0 00-.356.233zm-.253 1.111H1.317a.253.253 0 00-.178.056.085.085 0 00-.028.072.476.476 0 00.028.15.005.005 0 01.006.006l6.427 16.811a1.058 1.058 0 00.989.683h16.661a1.053 1.053 0 00.594-.206 1.032 1.032 0 00.4-.483l6.428-16.806a.005.005 0 01.006-.006.476.476 0 00.028-.15.085.085 0 00-.028-.072.253.253 0 00-.178-.056H7.675z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export default SvgBasket;
