import React, { FunctionComponent } from 'react';

import Img from 'gatsby-image';

import styled from 'styled-components';

export const ApplicationHeaderAvatar: FunctionComponent<
  ApplicationHeaderAvatarProps
> = ({ fixed }) => <ImgStyled fixed={fixed} />;

export interface ApplicationHeaderAvatarProps {
  fixed: any;
}

const ImgStyled = styled(Img)`
  clip-path: circle(50% at 50% 50%);
`;
