import React, { FunctionComponent } from 'react';

import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UiTypographyH1 } from '../ui';
import { headings } from '../styled/_variables';

export const ApplicationHeader: FunctionComponent<Props> = ({
  applicationTitle,
  isInternal = false,
}) => {
  const jsx = isInternal ? (
    <LinkStyled to="/">
      <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
      <InternalPageTitle>{applicationTitle}</InternalPageTitle>
    </LinkStyled>
  ) : (
    <UiTypographyH1>{applicationTitle}</UiTypographyH1>
  );

  return jsx;
};

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  line-height: ${headings.font.lineHeight.h1};
`;

const InternalPageTitle = styled(UiTypographyH1)`
  font-size: ${headings.font.size.h4};
  margin: 0;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

type Props = {
  applicationTitle: string;
  isInternal?: boolean;
};
