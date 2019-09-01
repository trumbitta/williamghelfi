import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { rhythm, fonts } from '../../styled/_variables';

export const UiFigureWithCaption: FunctionComponent<
  UiFigureWithCaptionProps
> = props => (
  <FigureStyled>
    {props.children}
    <FigCaptionStyled
      dangerouslySetInnerHTML={{ __html: props.caption }}
    ></FigCaptionStyled>
  </FigureStyled>
);

type UiFigureWithCaptionProps = {
  caption: string;
};

const FigureStyled = styled.figure`
  margin: ${rhythm[3]} 0;
`;

const FigCaptionStyled = styled.figcaption`
  margin: ${rhythm[1]} 0 0 0;
  font-size: ${fonts.sizes.small};
  text-align: center;
`;
