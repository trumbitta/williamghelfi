import { GetStaticPaths, GetStaticProps } from 'next/types';

// Third parties
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import { join } from 'path';
import { MDXRemote } from 'next-mdx-remote';

// Libs
import {
  getParsedFileContentBySlug,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@wg/markdown';
import { mdxElements } from '@wg/shared/mdx-elements';
import { getPostPaths } from '@wg/shared/utils';

export interface WithSlug extends ParsedUrlQuery {
  slug: string;
}

export type ArticleProps = MarkdownRenderingResult;

export const Article = ({
  frontMatter: { date, title },
  html,
}: ArticleProps) => {
  const formattedDate = new Intl.DateTimeFormat('sv-SE', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date));

  return (
    <article>
      <h1>{title}</h1>
      <p>{formattedDate}</p>

      <MDXRemote {...html} components={mdxElements} />
    </article>
  );
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: WithSlug;
}) => {
  // read markdown file into content and frontmatter
  const articleMarkdownContent = getParsedFileContentBySlug(params.slug);

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
  const paths = getPostPaths()
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
