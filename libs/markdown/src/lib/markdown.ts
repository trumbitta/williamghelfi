// Third parties
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeImgSize from 'rehype-img-size';
import rehypeHighlight from 'rehype-highlight';

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
  return serialize(markdownContent || '', {
    mdxOptions: {
      rehypePlugins: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [
          rehypeImgSize as any,
          {
            dir: join(process.cwd(), process.env.articlesImagePath as string),
          },
        ],
        rehypeHighlight,
      ],
    },
  });
};
