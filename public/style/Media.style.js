import {css} from '@emotion/core';

const size = {
    lg: 1920,
    md: 1024,
    sm: 480
};

export const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)};
    }
  `;
    return acc;
}, {});