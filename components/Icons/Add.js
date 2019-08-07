import React from 'react';

const SvgAdd = props => (
  <svg width={30} height={30} viewBox="0 0 30 30" {...props}>
    <defs>
      <clipPath id="add_svg__a">
        <path fill="none" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#add_svg__a)">
      <path d="M15 0a15 15 0 1015 15A15.017 15.017 0 0015 0zm0 28.75A13.75 13.75 0 1128.75 15 13.766 13.766 0 0115 28.75z" />
      <path d="M15.636 6.504h-1.272v7.86h-7.86v1.272h7.86v7.86h1.272v-7.86h7.86v-1.272h-7.86z" />
    </g>
  </svg>
);

export default SvgAdd;
