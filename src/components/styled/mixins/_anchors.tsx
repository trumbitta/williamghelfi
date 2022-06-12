import { css } from 'styled-components';

import { links } from '../_variables';

export const anchorsCommon = css`
  text-decoration: none;
  color: ${links.colors.base};
  font-weight: ${links.font.weight};

  :hover {
    text-decoration: underline;
    color: ${links.colors.hover};
  }

  :active {
    color: ${links.colors.active};
  }

  :visited {
    color: ${links.colors.visited};
  }

  :focus {
    color: ${links.colors.focus};
  }
`;
