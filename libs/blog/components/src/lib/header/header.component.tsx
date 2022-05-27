import { ReactNode } from 'react';

// Third parties
import styled from 'styled-components';

// Libs
import { H1 } from '@wg/shared/mdx-elements';
import { fontSizes } from '@wg/shared/theme';

export const Header = ({ children }: { children: ReactNode }) => (
  <header>
    <Title>{children}</Title>
  </header>
);

const Title = styled(H1)`
  font-size: ${fontSizes.xxl};
`;
