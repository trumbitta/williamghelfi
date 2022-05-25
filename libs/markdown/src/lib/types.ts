// Third parties
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface FrontMatter {
  title: string;
  date: string;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}
