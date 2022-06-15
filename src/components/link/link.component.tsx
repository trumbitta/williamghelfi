import { Link as GatsbyLink } from 'gatsby';

import styled from 'styled-components';

import { anchorsCommon } from '../styled/mixins/_anchors';

export const Link = styled(GatsbyLink)`
  ${anchorsCommon}
`;
