import React from 'react';

const SvgEdit = props => (
  <svg width={30} height={30} viewBox="0 0 30 30" {...props}>
    <defs>
      <clipPath id="edit_svg__a">
        <path fill="none" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#edit_svg__a)">
      <path d="M28.967 9.088a3.537 3.537 0 000-5l-3.058-3.055a3.537 3.537 0 00-5 0l-18 18-2.906 10.97 10.96-2.911zM4.338 19.36L18.073 5.625l6.3 6.3L10.64 25.663zm17.45-17.45a2.3 2.3 0 013.244 0l3.058 3.059a2.3 2.3 0 010 3.244l-2.839 2.839-6.3-6.3zm-18 18.652l5.653 5.653-7.693 2.04z" />
    </g>
  </svg>
);

export default SvgEdit;
