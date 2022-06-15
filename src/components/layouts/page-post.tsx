import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { UiContainer, UiDateInfo } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';
import { SEO, SeoProps } from '../seo/seo.component';
import { GlobalStyle } from '../global-style.component';

const PageTemplate: FunctionComponent<QueryData> = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const seo: SeoProps = {
    description: data.mdx.excerpt,
    image: siteMetadata.defaultImage,
    title: data.mdx.frontmatter.title,
    titleTemplate: siteMetadata.titleTemplate,
    twitterUsername: siteMetadata.twitterUsername,
    url: siteMetadata.siteUrl,
  };

  return (
    <>
      <GlobalStyle />
      <SEO {...seo} />
      <UiContainer>
        <ApplicationHeader
          applicationTitle={siteMetadata.defaultTitle}
          isInternal={true}
        ></ApplicationHeader>

        <h1>{data.mdx.frontmatter.title}</h1>
        <UiDateInfo date={data.mdx.frontmatter.date}></UiDateInfo>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </UiContainer>

      <ApplicationFooter />
    </>
  );
};

interface QueryData {
  data: {
    mdx: {
      id: string;
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
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
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date
      }
    }
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
`;

export default PageTemplate;
