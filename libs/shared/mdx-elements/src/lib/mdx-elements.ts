import { MDXRemoteProps } from 'next-mdx-remote';

// Components
import { H1 } from './h1';

export const mdxElements: MDXRemoteProps['components'] = {
  h1: H1,
};
