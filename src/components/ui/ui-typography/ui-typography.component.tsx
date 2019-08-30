import styled, { css } from 'styled-components';

import { headings, rhythm } from '../../styled/_variables';

const headingsCommon = css`
  font-family: ${headings.font.family};
  margin: ${headings.margin.top} 0 ${headings.margin.bottom} 0;
  padding: 0;
  color: ${headings.font.color};
  font-weight: ${headings.font.weight};
  text-rendering: optimizeLegibility;
`;

export const UiTypographyH1 = styled.h1.attrs(() => ({ headingsCommon }))`
  ${props => props.headingsCommon}
  font-size: ${headings.font.size.h1};
  line-height: ${headings.font.lineHeight.h1};
  letter-spacing: -2px;
`;

export const UiTypographyH2 = styled.h2.attrs(() => ({ headingsCommon }))`
  ${props => props.headingsCommon}
  font-size: ${headings.font.size.h2};
  line-height: ${headings.font.lineHeight.h2};
`;

export const UiTypographyP = styled.p`
  margin: 0 0 ${rhythm[3]} 0;
  padding: 0;
`;
