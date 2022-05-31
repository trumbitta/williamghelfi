/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = {
  siteMetadata: {
    title: 'Born, growing up.',
    subtitle: 'Dad, developer, nerd.',
    titleTemplate: '%s · Born, growing up.',
    description:
      'A blog about coding and the life of a computer programmer, by William Ghelfi.',
    url: 'https://www.williamghelfi.com', // No trailing slash allowed!
    image: '/images/william.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@trumbitta',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
  ],
};

// https://chaseonsoftware.com/netlify-gatsby-analytics/
// https://blog.oriel.io/2019/01/24/how-to-make-google-analytics-gdpr-compliant/
if (process.env.CONTEXT === 'production') {
  const googleAnalyticsCfg = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-148954935-1',
      anonymize: true,
      respectDNT: true,
      cookieExpires: 60 * 60 * 24 * 30, // 1 month
    },
  };
  config.plugins.push(googleAnalyticsCfg);
}

module.exports = config;
