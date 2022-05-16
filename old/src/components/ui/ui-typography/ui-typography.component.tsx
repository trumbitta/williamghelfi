import styled, { css } from 'styled-components';

import {
  headings,
  rhythm,
  links,
  colorRoles,
  breakpoints,
} from '../../styled/_variables';

const headingsCommon = css`
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

export const UiTypographyH1 = styled.h1.attrs(() => ({ headingsCommon }))`
  ${props => props.headingsCommon}
  font-size: ${headings.font.size.h2};
  line-height: ${headings.font.lineHeight.h1};
  letter-spacing: -2px;

  @media (min-width: ${breakpoints.sm}) {
    font-size: ${headings.font.size.h1};
  }
`;

export const UiTypographyH2 = styled.h2.attrs(() => ({ headingsCommon }))`
  ${props => props.headingsCommon}
  font-size: ${headings.font.size.h2};
  line-height: ${headings.font.lineHeight.h2};
  letter-spacing: -1px;
`;

export const UiTypographyP = styled.p`
  margin: 0 0 ${rhythm[3]} 0;
  padding: 0;
`;

export const anchorsCommon = css`
  text-decoration: none;
  color: ${links.colors.base};
  font-weight: ${links.font.weight};

  :hover {
    text-decoration: underline;
    color: ${links.colors.hover};
  }

  :active {
    color: ${links.colors.active};
  }

  :visited {
    color: ${links.colors.visited};
  }

  :focus {
    color: ${links.colors.focus};
  }
`;

export const UiTypographyA = styled.a.attrs(() => ({ anchorsCommon }))`
  ${props => props.anchorsCommon}
`;

export const UiBlockquote = styled.blockquote`
  border-left: ${rhythm[1]} solid ${colorRoles.primary};
  margin-left: ${rhythm[3]};
  margin-right: ${rhythm[3]};
  padding: ${rhythm[1]} ${rhythm[3]};
  background-color: ${colorRoles.light};
  font-style: italic;

  & small {
    display: flex;
    justify-content: flex-end;
    font-style: normal;

    &::before {
      content: '—';
      margin-right: ${rhythm[1]};
    }
  }
`;
