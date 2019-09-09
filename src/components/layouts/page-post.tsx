import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { UiContainer, UiTypographyH1 } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';
import { SEO } from '../seo/seo.component';

const PageTemplate: FunctionComponent<QueryData> = ({ data }) => {
  return (
    <>
      <SEO title={data.mdx.frontmatter.title} />
      <UiContainer>
        <ApplicationHeader
          applicationTitle={data.site.siteMetadata.title}
          isInternal={true}
        ></ApplicationHeader>

        <UiTypographyH1>{data.mdx.frontmatter.title}</UiTypographyH1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </UiContainer>

      <ApplicationFooter />
    </>
  );
};

type QueryData = {
  data: {
    mdx: {
      id: string;
      body: string;
      frontmatter: {
        title: string;
      };
    };
    site: any;
  };
};

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default PageTemplate;
