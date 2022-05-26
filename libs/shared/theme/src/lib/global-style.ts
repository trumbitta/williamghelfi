// Third parties
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { spacing } from './spacing';
import { fontFamilies, fontSizes } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.m};
    margin: 0;
    padding: ${spacing.m};
    color: ${colors.dark};

    @media (min-width: ${breakpoints.m}) {
      padding: ${spacing.m} ${spacing.xl};
    }
  }
`;
