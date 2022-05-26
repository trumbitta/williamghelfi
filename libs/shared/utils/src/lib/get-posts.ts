// Libs
import { getParsedFileContentBySlug, MarkdownDocument } from '@wg/markdown';

// Utils
import { getPostPaths } from './get-post-paths';

export interface Post extends MarkdownDocument {
  slug: string;
}

export const getPosts = (): Post[] => {
  const postPaths = getPostPaths();

  return postPaths.map((slug) => ({
    slug,
    ...getParsedFileContentBySlug(slug),
  }));
};
