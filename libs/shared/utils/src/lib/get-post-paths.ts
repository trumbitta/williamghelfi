import { readdirSync } from 'fs';
import { join } from 'path';

export const getPostPaths = (
  postsDirectory = join(
    process.cwd(),
    process.env.articlesSourcePath ?? '_articles'
  )
) => readdirSync(postsDirectory).map((path) => path.replace(/\.mdx?$/, ''));
