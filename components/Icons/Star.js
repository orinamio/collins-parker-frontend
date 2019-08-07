import React from 'react';

const SvgStar = props => (
  <svg width={24} height={22.291} viewBox="0 0 24 22.291" {...props}>
    <defs>
      <clipPath id="star_svg__a">
        <path fill="none" d="M0 0h24v22.291H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#star_svg__a)">
      <path
        d="M24 8.523h-9.182L12 0 9.182 8.523H0l7.511 5.245-2.925 8.523L12 17.009l7.414 5.282-2.93-8.523z"
        fill="#ffe734"
      />
    </g>
  </svg>
);

export default SvgStar;
