import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { UiContainer, UiTypographyH1 } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';

const PageTemplate: FunctionComponent = () => {
  const data = useStaticQuery(
    graphql`
      query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
          id
          body
          frontmatter {
            title
          }
        }
        site {
          ...SiteMetadataFragment
        }
      }
    `
  );

  return (
    <UiContainer>
      <ApplicationHeader
        applicationTitle={data.site.siteMetadata.title}
        isInternal={true}
      ></ApplicationHeader>

      <UiTypographyH1>{data.mdx.frontmatter.title}</UiTypographyH1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </UiContainer>
  );
};

export default PageTemplate;
