// Third parties
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Types
import { FrontMatter, MarkdownDocument } from './types';

// Utils
import { markdownToHtml } from './markdown-to-html';

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatter,
    content,
  };
};

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || '');
};
