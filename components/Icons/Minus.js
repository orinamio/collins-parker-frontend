import React from 'react';

const SvgMinus = props => (
  <svg width={30} height={30} viewBox="0 0 30 30" {...props}>
    <defs>
      <clipPath id="minus_svg__a">
        <path fill="none" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#minus_svg__a)">
      <path d="M15 30A15 15 0 100 15a15.017 15.017 0 0015 15zm0-28.75A13.75 13.75 0 111.25 15 13.766 13.766 0 0115 1.25z" />
      <path d="M6.504 14.389h16.992v1.223H6.504z" />
    </g>
  </svg>
);

export default SvgMinus;
