import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export const SEO: FunctionComponent<Props> = props => {
  type Query = {
    site: {
      siteMetadata: {
        defaultTitle: string;
        titleTemplate: string;
        defaultDescription: string;
        siteUrl: string;
        defaultImage: string;
        twitterUsername: string;
      };
    };
  };

  const data = useStaticQuery<Query>(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  const seo = {
    title: props.title || siteMetadata.defaultTitle,
    description: props.description || siteMetadata.defaultDescription,
    image: `${siteMetadata.siteUrl}${props.image || siteMetadata.defaultImage}`,
    url: `${siteMetadata.siteUrl}${props.pathname || '/'}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(props.article ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

type Props = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
};

SEO.defaultProps = {
  title: '',
  description: '',
  image: '',
  pathname: '',
  article: false,
} as Partial<Props>;
