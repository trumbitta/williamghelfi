import { MDXProvider } from '@mdx-js/react';
import './node_modules/normalize.css/normalize.css';
import React from 'react';

import {
  UiTypographyH1,
  UiTypographyP,
  UiTypographyA,
} from './src/components/ui/';

import 'typeface-open-sans';
import 'typeface-merriweather';

import './src/assets/css/global.css';

const components = {
  h1: UiTypographyH1,
  p: UiTypographyP,
  a: UiTypographyA,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
