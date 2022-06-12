import React from 'react';

import { GatsbyBrowser } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import './node_modules/prismjs/themes/prism-tomorrow.css';

import 'typeface-open-sans';
import 'typeface-merriweather';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => <MDXProvider>{element}</MDXProvider>;
