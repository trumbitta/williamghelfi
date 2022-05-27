// Third parties
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { spacing } from './spacing';
import { fontFamilies, fontSizes } from './typography';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/merriweather';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${fontFamilies.serif};
    font-size: ${fontSizes.m};
    margin: 0;
    padding: ${spacing.m};
    color: ${colors.dark};

    @media (min-width: ${breakpoints.m}) {
      padding: ${spacing.m} ${spacing.xl};
    }
  }
`;
