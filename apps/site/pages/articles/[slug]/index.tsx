import { GetStaticPaths, GetStaticProps } from 'next/types';

// Third parties
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import { join } from 'path';

// Libs
import {
  getParsedFileContentBySlug,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@wg/markdown';

export interface WithSlug extends ParsedUrlQuery {
  slug: string;
}

export type ArticleProps = MarkdownRenderingResult;

const POSTS_PATH = join(process.cwd(), process.env.articlesSourcePath);

export const Article = ({ frontMatter, html }: ArticleProps) => {
  return (
    <div className="md:container md:mx-auto">
      <article>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <hr />

        <main dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: WithSlug;
}) => {
  // read markdown file into content and frontmatter
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  // generate HTML
  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHTML,
    },
  };
};

export const getStaticPaths: GetStaticPaths<WithSlug> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
