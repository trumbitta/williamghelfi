import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import styled from 'styled-components';

import LayoutPageBase, {
  LayoutPageBaseProps,
} from '../components/layouts/page-base';
import { UiTypographyP, UiTypographyH2, UiDateInfo } from '../components/ui';
import { Link } from '../components/link/link.component';
import { headings } from '../components/styled/_variables';
import { ApplicationHeaderAvatarProps } from '../components/application-header/application-header-avatar/application-header-avatar';

const BlogIndex: FunctionComponent<QueryData> = ({ data }) => {
  const { edges: posts } = data.allMdx;

  const siteMetadata = data.site.siteMetadata;
  const layoutPageBaseProps: LayoutPageBaseProps = {
    seo: {
      description: siteMetadata.defaultDescription,
      image: siteMetadata.defaultImage,
      title: siteMetadata.defaultTitle,
      twitterUsername: siteMetadata.twitterUsername,
      url: siteMetadata.siteUrl,
    },
    avatar: data.file.childImageSharp,
  };

  return (
    <LayoutPageBase props={layoutPageBaseProps}>
      {posts.map(({ node: post }) => (
        <React.Fragment key={post.id}>
          <LinkStyled to={post.fields.slug}>
            <UiTypographyH2>{post.frontmatter.title}</UiTypographyH2>
          </LinkStyled>
          <UiTypographyP>
            <UiDateInfo date={post.frontmatter.date}></UiDateInfo>
            {post.excerpt}
          </UiTypographyP>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
    file(relativePath: { eq: "william.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;

interface QueryData {
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
              date: string;
            };
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
    file: { childImageSharp: ApplicationHeaderAvatarProps };
  };
}

const LinkStyled = styled(Link)`
  color: ${headings.font.color} !important;
`;

export default BlogIndex;
