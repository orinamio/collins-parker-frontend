import React from 'react';

const SvgCaret = props => (
  <svg width={14} height={7.999} viewBox="0 0 14 7.999" {...props}>
    <defs>
      <clipPath id="caret_svg__a">
        <path fill="none" d="M0 0h14v7.999H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#caret_svg__a)">
      <path
        d="M7 5.322L12.445.096a.356.356 0 01.494.006l.956.935a.339.339 0 01.006.484L7.253 7.903A.326.326 0 017 7.997a.346.346 0 01-.253-.094L.099 1.521a.339.339 0 01.006-.484l.956-.935a.356.356 0 01.494-.006z"
        opacity={0.868}
      />
    </g>
  </svg>
);

export default SvgCaret;
