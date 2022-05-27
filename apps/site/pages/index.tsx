import { GetStaticProps } from 'next';

// Lib
import { getPosts, Post } from '@wg/shared/utils';
import { Header, PostPreview } from '@wg/blog/components';

export interface IndexProps {
  posts: Post[];
}

export const Index = ({ posts }: IndexProps) => (
  <>
    <Header>Born, growing up.</Header>

    {posts.map(({ slug, frontMatter }) => (
      <PostPreview key={slug} post={frontMatter} linkTo={`/blog/${slug}`} />
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
