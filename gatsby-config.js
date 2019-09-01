/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Born, growing up.',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        plugins: ['gatsby-remark-unwrap-images', 'gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-ts-loader',
      options: {
        tslint: true, // false or exclude to disable tslint
      },
    },
  ],
};
