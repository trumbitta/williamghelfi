import styled from 'styled-components';

import { colorRoles, components, fonts, rhythm } from '../../styled/_variables';
import { uiComponentsBox } from '../../styled/mixins/_components';

export const UiFooter = styled.footer`
  ${uiComponentsBox}
  padding-top: ${rhythm[4]};
  padding-bottom: ${rhythm[4]};
  background-color: ${colorRoles.light};
  border: ${components.border.thickness} solid ${components.border.color};
  font-family: ${fonts.families.sansSerif};
  font-size: ${fonts.sizes.smaller};
  text-align: center;
`;
