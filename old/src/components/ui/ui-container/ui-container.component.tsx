import styled from 'styled-components';

import { respondTo } from '../../styled/mixins/_respond-to';
import { container } from '../../styled/_variables';

export const UiContainer = styled.div`
  width: 100%;
  padding-right: ${container.paddingX};
  padding-left: ${container.paddingX};
  margin-right: auto;
  margin-left: auto;

  ${respondTo.sm`
    width: 540px;
  `}

  ${respondTo.md`
    width: 720px;
  `}

  ${respondTo.lg`
    width: 800px;
  `}
`;
