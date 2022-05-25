import { PropsWithChildren } from 'react';

// Third parties
import styled from 'styled-components';

// Libs
import { fontSizes, spacing } from '@wg/shared/theme';

export interface FigureProps {
  caption?: string;
}

export const Figure = ({
  caption,
  children,
}: PropsWithChildren<FigureProps>) => (
  <FigureStyled>
    {children}
    <FigCaption>{caption}</FigCaption>
  </FigureStyled>
);

const FigureStyled = styled.figure`
  margin: ${spacing.m} 0;
`;

const FigCaption = styled.figcaption`
  margin: ${spacing.xs} 0 0 0;
  font-size: ${fontSizes.s};
  text-align: center;
`;
