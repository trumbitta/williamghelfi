import { GetStaticPaths, GetStaticProps } from 'next/types';

// Third parties
import { ParsedUrlQuery } from 'querystring';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export const Article = ({ slug }: ArticleProps) => {
  return (
    <div>
      <h1>Visiting {slug}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: [1, 2, 3].map((idx) => {
      return {
        params: {
          slug: `page${idx}`,
        },
      };
    }),
    fallback: false,
  };
};

export default Article;
