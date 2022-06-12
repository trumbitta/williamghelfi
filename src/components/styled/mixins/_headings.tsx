import { css } from 'styled-components';

import { breakpoints, headings, rhythm } from '../_variables';

export const headingsCommon = css`
  font-family: ${headings.font.family};
  margin: ${rhythm[3]} 0 ${headings.margin.bottom} 0;
  padding: 0;
  color: ${headings.font.color};
  font-weight: ${headings.font.weight};
  text-rendering: optimizeLegibility;

  @media (min-width: ${breakpoints.md}) {
    margin: ${headings.margin.top} 0 ${headings.margin.bottom} 0;
  }
`;
