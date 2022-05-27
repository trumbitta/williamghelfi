import Link from 'next/link';

// Libs
import { FrontMatter } from '@wg/markdown';

export interface PostPreviewProps {
  linkTo?: string;
  post: FrontMatter;
}

export const PostPreview = ({
  linkTo = '',
  post: { title },
}: PostPreviewProps) => {
  return (
    <article>
      <h1>
        <Link href={linkTo}>{title}</Link>
      </h1>
    </article>
  );
};
