// Third parties
import styled from 'styled-components';

// Libs
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  spacing,
} from '@wg/shared/theme';

export const H1 = styled.h1`
  margin: ${spacing.xl} 0;
  font-family: ${fontFamilies.sansSerif};
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.bold};
`;
