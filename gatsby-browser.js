import { MDXProvider } from '@mdx-js/react';
import './node_modules/normalize.css/normalize.css';
import './node_modules/prismjs/themes/prism-tomorrow.css';
import React from 'react';

import {
  UiTypographyH1,
  UiTypographyP,
  UiTypographyA,
  UiBlockquote,
} from './src/components/ui/';

import 'typeface-open-sans';
import 'typeface-merriweather';

import './src/assets/css/global.css';

const components = {
  h1: UiTypographyH1,
  p: UiTypographyP,
  a: UiTypographyA,
  blockquote: UiBlockquote,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
