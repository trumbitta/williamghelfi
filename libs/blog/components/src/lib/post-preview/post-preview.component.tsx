import Link from 'next/link';

// Third parties
import styled from 'styled-components';

// Libs
import { FrontMatter } from '@wg/markdown';
import { H1 } from '@wg/shared/mdx-elements';
import { spacing } from '@wg/shared/theme';

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
      <H1>
        <Link href={linkTo}>{title}</Link>
      </H1>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  a {
    color: inherit;
  }
`;
