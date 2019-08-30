declare module 'typography-theme-sutro' {
  import { TypographyOptions } from 'typography'
  const Theme: TypographyOptions

  export = Theme
}

declare module 'gatsby-plugin-mdx' {
  export const MDXRenderer: React.FunctionComponent
}
