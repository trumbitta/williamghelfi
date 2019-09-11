import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

export const SEO: FunctionComponent<SeoProps> = props => (
  <Helmet title={props.title} titleTemplate={props.titleTemplate}>
    <meta name="description" content={props.description} />
    <meta name="image" content={props.image} />
    {props.url && <meta property="og:url" content={props.url} />}
    {(props.article ? true : null) && (
      <meta property="og:type" content="article" />
    )}
    {props.title && <meta property="og:title" content={props.title} />}
    {props.description && (
      <meta property="og:description" content={props.description} />
    )}
    {props.image && <meta property="og:image" content={props.image} />}
    <meta name="twitter:card" content="summary_large_image" />
    {props.twitterUsername && (
      <meta name="twitter:creator" content={props.twitterUsername} />
    )}
    {props.title && <meta name="twitter:title" content={props.title} />}
    {props.description && (
      <meta name="twitter:description" content={props.description} />
    )}
    {props.image && <meta name="twitter:image" content={props.image} />}
  </Helmet>
);

export type SeoProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  article?: boolean;
  twitterUsername?: string;
  titleTemplate?: string;
};

SEO.defaultProps = {
  title: '',
  description: '',
  image: '',
  url: '',
  article: false,
  twitterUsername: '',
  titleTemplate: '',
} as Partial<SeoProps>;
