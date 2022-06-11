import React, { FunctionComponent } from 'react';

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import styled from 'styled-components';

import { colorRoles, rhythm } from '../../styled/_variables';

export const ApplicationHeaderAvatar: FunctionComponent<
  ApplicationHeaderAvatarProps
> = ({avatar}) => (
  <ContainerStyled>
    <ImgStyled image={avatar} alt="" />
  </ContainerStyled>
);

export type ApplicationHeaderAvatarProps = {avatar: IGatsbyImageData };

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

const ImgStyled = styled(GatsbyImage)`
  clip-path: circle(50% at 50% 50%);
`;
