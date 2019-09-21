import React, { FunctionComponent } from 'react';

import Img from 'gatsby-image';

import styled from 'styled-components';

import { colorRoles, rhythm } from '../../styled/_variables';

export const ApplicationHeaderAvatar: FunctionComponent<
  ApplicationHeaderAvatarProps
> = ({ fixed }) => (
  <ContainerStyled>
    <ImgStyled fixed={fixed} />
  </ContainerStyled>
);

export interface ApplicationHeaderAvatarProps {
  fixed: any;
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background-color: ${colorRoles.light};
  clip-path: circle(50% at 50% 50%);
  margin-right: ${rhythm[1]};
`;

const ImgStyled = styled(Img)`
  clip-path: circle(50% at 50% 50%);
`;
