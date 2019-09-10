import React, { FunctionComponent } from 'react';

import { Link as GatsbyLink } from 'gatsby';

import styled from 'styled-components';

import { anchorsCommon } from '../ui';

export const Link = styled(GatsbyLink).attrs(() => ({ anchorsCommon }))`
  ${props => props.anchorsCommon}
`;
