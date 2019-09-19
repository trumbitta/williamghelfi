/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Born, growing up.',
    titleTemplate: '%s · Born, growing up.',
    description:
      'A blog about coding and the life of a computer programmer, by William Ghelfi.',
    url: 'https://www.williamghelfi.com', // No trailing slash allowed!
    image: '/images/william.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@trumbitta',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-sharp',
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
        plugins: [
          'gatsby-remark-unwrap-images',
          'gatsby-remark-images',
          'gatsby-remark-embed-snippet',
          'gatsby-remark-prismjs',
        ],
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              directory: `${__dirname}/src/snippets/`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
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
