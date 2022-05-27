import { MDXRemoteProps } from 'next-mdx-remote';

// Components
import { ImageResponsive } from './image-responsive';

export const mdxElements: MDXRemoteProps['components'] = {
  img: ImageResponsive,
};
