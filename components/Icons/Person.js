import React from 'react';

const SvgPerson = props => (
  <svg width={29.998} height={29.998} viewBox="0 0 29.998 29.998" {...props}>
    <defs>
      <clipPath id="person_svg__a">
        <path fill="none" d="M0 0h29.998v29.998H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#person_svg__a)" fill="#fff">
      <path d="M14.999 15.6a7.8 7.8 0 10-7.8-7.8 7.808 7.808 0 007.8 7.8zm0-14.4a6.6 6.6 0 11-6.6 6.6 6.607 6.607 0 016.6-6.6zM22.852 16.618a.6.6 0 00-.692.044 11.378 11.378 0 01-14.321 0 .6.6 0 00-.692-.044A14.914 14.914 0 000 29.398a.6.6 0 00.6.6h28.8a.6.6 0 00.6-.6 14.914 14.914 0 00-7.148-12.78zM1.213 28.798a13.71 13.71 0 016.213-10.935 12.576 12.576 0 0015.146 0 13.71 13.71 0 016.213 10.935z" />
    </g>
  </svg>
);

export default SvgPerson;
