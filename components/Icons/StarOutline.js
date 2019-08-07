import React from 'react';

const SvgStarOutline = props => (
  <svg width={23} height={21.362} viewBox="0 0 23 21.362" {...props}>
    <defs>
      <clipPath id="star-outline_svg__a">
        <path fill="none" d="M0 0h23v21.362H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#star-outline_svg__a)">
      <path
        d="M23 8.168h-8.8L11.5 0 8.8 8.168H0l7.2 5.026-2.8 8.168 7.1-5.062 7.105 5.062-2.805-8.168zm-6.027 11l-5.473-3.9-5.473 3.9 2.187-6.289L2.67 9.041H9.4l2.1-6.33 2.1 6.33h6.73l-5.545 3.83z"
        fill="#ffe734"
      />
    </g>
  </svg>
);

export default SvgStarOutline;
