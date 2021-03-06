import React from 'react';

const SvgCpLogo = ({ type, ...otherProps }) => {
  const fill = type == 'secondary' ? 'white' : 'black';
  return (
    <svg
      width={28.488}
      height={28.488}
      viewBox="0 0 28.488 28.488"
      {...otherProps}
    >
      <defs>
        <clipPath id="cp_logo_svg__a">
          <path fill="none" d="M0 0h28.489v28.488H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#cp_logo_svg__a)">
        <path
          d="M13.428 28.486v-3h-2.9V17.94h-.337a25.119 25.119 0 01-3.87-.288 9.321 9.321 0 01-3.258-1.1 5.92 5.92 0 01-2.232-2.286 7.924 7.924 0 01-.828-3.888 7.354 7.354 0 01.774-3.546 6.19 6.19 0 012.067-2.266A8.749 8.749 0 015.85 3.36 17.213 17.213 0 019.396 3h1.129V0h8.568a17.151 17.151 0 013.546.36 8.739 8.739 0 013.006 1.206 6.2 6.2 0 012.07 2.268 7.351 7.351 0 01.774 3.546 7.924 7.924 0 01-.826 3.888 5.932 5.932 0 01-2.232 2.286 9.321 9.321 0 01-3.258 1.1 25.24 25.24 0 01-3.87.288h-.34v13.544zM8.316 6.996a5.469 5.469 0 00-1.764.49 3.334 3.334 0 00-1.3 1.08 3.181 3.181 0 00-.5 1.89 3.224 3.224 0 00.558 2.016 3.408 3.408 0 001.44 1.08 6.175 6.175 0 001.926.432q.954.067 1.849.071V6.886h-.337a16.959 16.959 0 00-1.872.11zm9.647 4.056q.894-.006 1.849-.071a6.18 6.18 0 001.926-.432 3.429 3.429 0 001.44-1.08 3.224 3.224 0 00.558-2.016 3.181 3.181 0 00-.5-1.89 3.347 3.347 0 00-1.3-1.08 5.469 5.469 0 00-1.763-.487 16.971 16.971 0 00-1.872-.11h-.338z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default SvgCpLogo;
