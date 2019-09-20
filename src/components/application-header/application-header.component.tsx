import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UiTypographyH1 } from '../ui';
import { headings, colorRoles, rhythm } from '../styled/_variables';
import { Link } from '../link/link.component';
import {
  ApplicationHeaderAvatar,
  ApplicationHeaderAvatarProps,
} from './application-header-avatar/application-header-avatar';

export const ApplicationHeader: FunctionComponent<Props> = ({
  applicationTitle,
  isInternal = false,
  avatar,
}) => {
  const avatarComponent =
    avatar && avatar.fixed ? (
      <ApplicationHeaderAvatarStyled fixed={avatar.fixed} />
    ) : null;

  const jsx = isInternal ? (
    <LinkStyled to="/">
      <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
      <InternalPageTitle>{applicationTitle}</InternalPageTitle>
    </LinkStyled>
  ) : (
    <UiTypographyH1>
      <DivStyled>
        {avatarComponent}
        {applicationTitle}
      </DivStyled>
      <WIPNotice>Work in progress, finishing up.</WIPNotice>
    </UiTypographyH1>
  );

  return jsx;
};

const DivStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ApplicationHeaderAvatarStyled = styled(ApplicationHeaderAvatar)`
  margin-right: ${rhythm[5]};
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  line-height: ${headings.font.lineHeight.h1};
  color: ${headings.font.color} !important;
`;

const InternalPageTitle = styled(UiTypographyH1)`
  font-size: ${headings.font.size.h4};
  margin: 0;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

const WIPNotice = styled.small`
  color: ${colorRoles.secondary};
  font-size: 70%;
  text-transform: lowercase;
  display: block;
`;

type Props = {
  applicationTitle: string;
  isInternal?: boolean;
  avatar: ApplicationHeaderAvatarProps;
};
