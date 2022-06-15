import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { anchorsCommon } from './styled/mixins/_anchors';
import { headingsCommon } from './styled/mixins/_headings';

import {
  headings,
  rhythm,
  colorRoles,
  breakpoints,
} from './styled/_variables';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 112.5%;
    line-height: 1.78em;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    color: ${colorRoles.dark};
    font-family: Merriweather, Georgia, serif;
    font-weight: 300;
    word-wrap: break-word;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.25em;
    border-radius: 4px;
    white-space: normal;
    background-color: #fefefe;
    color: #000000;
  }

  h1 {
    ${headingsCommon}

    font-size: ${headings.font.size.h2};
    line-height: ${headings.font.lineHeight.h1};
    letter-spacing: -2px;

    @media (min-width: ${breakpoints.sm}) {
      font-size: ${headings.font.size.h1};
    }
  }

  h2 {
    ${headingsCommon}

    font-size: ${headings.font.size.h2};
    line-height: ${headings.font.lineHeight.h2};
    letter-spacing: -1px;
  }

  p {
    margin: 0 0 ${rhythm[3]} 0;
    padding: 0;
  }

  a {
    ${anchorsCommon}
  }

  blockquote {
    border-left: ${rhythm[1]} solid ${colorRoles.primary};
    margin-left: ${rhythm[3]};
    margin-right: ${rhythm[3]};
    padding: ${rhythm[1]} ${rhythm[3]};
    background-color: ${colorRoles.light};
    font-style: italic;

    small {
      display: flex;
      justify-content: flex-end;
      font-style: normal;

      &::before {
        content: '—';
        margin-right: ${rhythm[1]};
      }
    }

    code {
      word-break: break-all !important;
    }
  }
`;
