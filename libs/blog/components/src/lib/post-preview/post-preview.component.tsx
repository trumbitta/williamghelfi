import Link from 'next/link';

// Libs
import { FrontMatter } from '@wg/markdown';

export interface PostPreviewProps {
  linkTo?: string;
  post: FrontMatter;
}

export const PostPreview = ({
  linkTo = '',
  post: { date, title },
}: PostPreviewProps) => {
  const formattedDate = new Intl.DateTimeFormat('sv-SE', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date));

  return (
    <article>
      <h1>
        <Link href={linkTo}>{title}</Link>
      </h1>
      <p>{formattedDate}</p>
    </article>
  );
};
