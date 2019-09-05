import React from 'react';

import styled from 'styled-components';

import { colorRoles, components, fonts } from '../../styled/_variables';
import { uiComponentsBox } from '../../styled/mixins/_components';

export const UiFooter = styled.footer`
  ${uiComponentsBox}
  background-color: ${colorRoles.light};
  border: ${components.border.thickness} solid ${components.border.color};
  font-family: ${fonts.families.sansSerif};
  font-size: ${fonts.sizes.smaller};
  text-align: center;
`;
