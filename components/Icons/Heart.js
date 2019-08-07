import React from 'react';

const SvgHeart = props => (
  <svg width={34.537} height={30} viewBox="0 0 34.537 30" {...props}>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="none" d="M0 0h34.538v30H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#heart_svg__a)">
      <path d="M16.867 29.715l.4.288.4-.288c.689-.494 16.867-12.181 16.867-20.3A9.407 9.407 0 0017.267 4.24 9.327 9.327 0 009.41.001 9.425 9.425 0 000 9.415c0 8.115 16.178 19.8 16.867 20.3zM9.414 1.381a7.974 7.974 0 017.232 4.556l.622 1.292.622-1.292a8.027 8.027 0 0115.266 3.478c0 6.749-13.377 17.013-15.887 18.879C14.757 26.426 1.382 16.166 1.382 9.415a8.042 8.042 0 018.032-8.034z" />
    </g>
  </svg>
);

export default SvgHeart;
