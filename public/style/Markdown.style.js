import {css} from '@emotion/core';
import {Color} from './Color.style';
import {media} from "./Media.style";


export const MarkdownXl = (color= Color.black, weight = 400) => css`
      font-size: 50px;
      font-weight: ${weight};
      color: ${color};
      ${media.sm`font-size: 28px;`}

`;
export const MarkdownLg = (color = Color.black, weight = 400) => css`
      font-size: 24px;
      font-weight: ${weight};
      color: ${color};
      ${media.sm`font-size: 20px;`}

`;
export const MarkdownMd = (color = Color.black, weight= 400) => css`
      font-size: 18px;
      font-weight: ${weight};
      color: ${color};
      ${media.sm`font-size: 16px;`}

`;
export const MarkdownBase = (color = Color.black, weight = 400) => css`
      font-size: 16px;
      font-weight: ${weight};
      color: ${color};
      ${media.sm`font-size: 13px;`}

`;
export const MarkdownSm = (color = Color.black, weight = 400) => css`
      font-size: 13px;
      font-weight: ${weight};
      color: ${color};
      ${media.sm`font-size: 12px;`}
`;