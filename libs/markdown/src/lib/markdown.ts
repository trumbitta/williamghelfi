// Third parties
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// Types
import { FrontMatter, MarkdownDocument } from './types';

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath = join(process.cwd(), process.env.articlesSourcePath ?? '_articles')
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatter,
    content,
  };
};

export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || '');
};