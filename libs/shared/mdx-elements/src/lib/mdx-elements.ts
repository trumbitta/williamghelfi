import { MDXRemoteProps } from 'next-mdx-remote';

// Components
import { Figure } from './figure';
import { H1 } from './h1';

export const mdxElements: MDXRemoteProps['components'] = {
  Figure,
  h1: H1,
};
