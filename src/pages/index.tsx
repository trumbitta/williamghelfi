import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import LayoutPageBase from '../components/layouts/page-base';
import { UiTypographyP, UiTypographyH2 } from '../components/ui';
import { Link } from '../components/link/link.component';
import { headings } from '../components/styled/_variables';
import styled from 'styled-components';

const BlogIndex: FunctionComponent<QueryData> = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const applicationTitle = data.site.siteMetadata.title;

  return (
    <LayoutPageBase title={applicationTitle}>
      {posts.map(({ node: post }) => (
        <React.Fragment key={post.id}>
          <LinkStyled to={post.fields.slug}>
            <UiTypographyH2>{post.frontmatter.title}</UiTypographyH2>
          </LinkStyled>
          <UiTypographyP>{post.excerpt}</UiTypographyP>
        </React.Fragment>
      ))}
    </LayoutPageBase>
  );
};

export const pageQuery = graphql`
  query data {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

type QueryData = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMdx: {
      edges: [
        {
          node: {
            id: any;
            excerpt: string;
            frontmatter: {
              title: string;
            };
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
  };
};

const LinkStyled = styled(Link)`
  color: ${headings.font.color} !important;
`;

export default BlogIndex;
