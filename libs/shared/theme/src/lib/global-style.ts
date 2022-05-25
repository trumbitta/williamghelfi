// Third parties
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fontFamilies, fontSizes } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.m};
  }
`;
