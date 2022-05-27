import Link from 'next/link';

// Third parties
import styled from 'styled-components';

// Libs
import { FrontMatter } from '@wg/markdown';
import { H1 } from '@wg/shared/mdx-elements';
import { fontSizes, fontWeights } from '@wg/shared/theme';

export interface PostPreviewProps {
  linkTo?: string;
  post: FrontMatter;
}

export const PostPreview = ({
  linkTo = '',
  post: { title },
}: PostPreviewProps) => {
  return (
    <Wrapper>
      <Title>
        <Link href={linkTo}>{title}</Link>
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  a {
    color: inherit;
  }
`;

const Title = styled(H1)`
  font-size: ${fontSizes.l};
  font-weight: ${fontWeights.normal};
`;
