import { GetStaticProps } from 'next';

// Lib
import { getPosts, Post } from '@wg/shared/utils';

export interface IndexProps {
  posts: Post[];
}

export const Index = ({ posts }: IndexProps) => (
  <>
    <h1>Born, growing up.</h1>

    {posts.map(({ slug, frontMatter: { date, title } }) => (
      <p key={slug}>
        {date} - {title}
      </p>
    ))}
  </>
);

export const getStaticProps: GetStaticProps<IndexProps> = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Index;
