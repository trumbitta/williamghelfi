import React, { FunctionComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { UiFooter, UiContainer } from '../ui';
import { colorRoles } from '../styled/_variables';
import { Link } from '../link/link.component';

export const ApplicationFooter: FunctionComponent = () => (
  <UiFooter>
    <UiContainer>
      <p>
        Copyright &copy; {new Date().getFullYear()} &mdash; William Ghelfi
        &mdash; Made with{' '}
        <FontAwesomeIcon icon={faHeart} color={colorRoles.primary} /> and{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>

      <p>
        <Link to="/privacy-policy">Privacy</Link>
      </p>

      <p style={{ marginBottom: 0 }}>
        The postings on this site are my own and don't necessarily represent my
        employer's positions, strategies or opinions.
      </p>
    </UiContainer>
  </UiFooter>
);
