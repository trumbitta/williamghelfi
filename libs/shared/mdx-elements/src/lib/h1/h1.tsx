import { ReactNode } from 'react';
import styled from 'styled-components';

export interface H1Props {
  children?: ReactNode;
}

const StyledH1 = styled.h1`
  color: pink;
`;

export const H1 = ({ children }: H1Props) => {
  return <StyledH1>{children}</StyledH1>;
};
