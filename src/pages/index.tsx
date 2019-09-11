import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import styled from 'styled-components';

import LayoutPageBase from '../components/layouts/page-base';
import { UiTypographyP, UiTypographyH2 } from '../components/ui';
import { Link } from '../components/link/link.component';
import { headings } from '../components/styled/_variables';
import { SeoProps } from '../components/seo/seo.component';

const BlogIndex: FunctionComponent<QueryData> = ({ data }) => {
  const { edges: posts } = data.allMdx;

  const siteMetadata = data.site.siteMetadata;
  const seo: SeoProps = {
    description: siteMetadata.defaultDescription,
    image: siteMetadata.defaultImage,
    title: siteMetadata.defaultTitle,
    twitterUsername: siteMetadata.twitterUsername,
    url: siteMetadata.siteUrl,
  };

  return (
    <LayoutPageBase props={seo}>
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
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
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
        defaultTitle: string;
        titleTemplate: string;
        defaultDescription: string;
        siteUrl: string;
        defaultImage: string;
        twitterUsername: string;
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
