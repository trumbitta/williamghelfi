import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { math } from 'polished';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UiTypographyH1, UiTypographyA } from '../ui';
import {
  headings,
  colorRoles,
  rhythm,
  breakpoints,
  fonts,
  components,
} from '../styled/_variables';
import { respondTo } from '../styled/mixins/_respond-to';
import { Link } from '../link/link.component';
import {
  ApplicationHeaderAvatar,
  ApplicationHeaderAvatarProps,
} from './application-header-avatar/application-header-avatar';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  applicationTitle: string;
  subtitle?: string;
  isInternal?: boolean;
  avatar?: IGatsbyImageData;
}

export const ApplicationHeader: FunctionComponent<Props> = ({
  applicationTitle,
  subtitle,
  isInternal = false,
  avatar,
}) => {
  const avatarComponent =
    avatar ? (
      <ApplicationHeaderAvatar avatar={avatar} />
    ) : null;

  const jsx = isInternal ? (
    <LinkStyled to="/">
      <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
      <InternalPageTitle>{applicationTitle}</InternalPageTitle>
    </LinkStyled>
  ) : (
    <>
      <ContactsBar>
        <ContactsBarItem href="https://github.com/trumbitta/" title="GitHub">
          <FontAwesomeIcon icon={faGithub} fixedWidth />
        </ContactsBarItem>
        <ContactsBarItem href="https://twitter.com/trumbitta/" title="Twitter">
          <FontAwesomeIcon icon={faTwitter} fixedWidth />
        </ContactsBarItem>
        <ContactsBarItem
          href="https://www.linkedin.com/in/williamghelfi/"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} fixedWidth />
        </ContactsBarItem>
      </ContactsBar>
      <UiTypographyH1Styled>
        <DivStyled>
          {avatarComponent}
          {applicationTitle}
        </DivStyled>
        <Subtitle>{subtitle}</Subtitle>
      </UiTypographyH1Styled>
    </>
  );

  return jsx;
};

const ContactsBar = styled.nav`
  background-color: ${colorRoles.primary};
  display: flex;
  justify-content: center;
`;

const ContactsBarItem = styled(UiTypographyA)`
  color: ${colorRoles.light} !important;
  margin: 0 ${math(`${components.paddingX} / 4`)};
  padding: 0 ${math(`${components.paddingX} / 2`)};
`;

const UiTypographyH1Styled = styled(UiTypographyH1)`
  margin-top: 0 !important;
  padding-top: ${headings.margin.top};
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${respondTo.md`
    flex-direction: row;
  `}
`;

const ApplicationHeaderAvatarStyled = styled(ApplicationHeaderAvatar)`
  margin-right: ${rhythm[5]};
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  line-height: ${headings.font.lineHeight.h1};
  color: ${colorRoles.light} !important;
  background-color: ${colorRoles.primary};
`;

const InternalPageTitle = styled(UiTypographyH1)`
  font-size: ${headings.font.size.h4};
  margin: 0 !important;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: ${colorRoles.light};
  font-weight: ${fonts.weights.normal};

  @media (min-width: ${breakpoints.sm}) {
    font-size: ${headings.font.size.h4};
  }
`;

const Subtitle = styled.small`
  color: ${colorRoles.secondary};
  font-size: 70%;
  text-transform: lowercase;
  display: block;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    padding-left: 54px;
    margin-left: ${rhythm[1]};
    text-align: left;
  }
`;