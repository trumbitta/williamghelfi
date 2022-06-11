import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';
import { ImageDataLike, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

import LayoutPageBase, {
  LayoutPageBaseProps,
} from '../components/layouts/page-base';
import { UiTypographyP, UiTypographyH2, UiDateInfo } from '../components/ui';
import { Link } from '../components/link/link.component';
import { headings, grid, breakpoints } from '../components/styled/_variables';

const BlogIndex: FunctionComponent<QueryData> = ({ data }) => {
  const { edges: posts } = data.allMdx;

  const siteMetadata = data.site.siteMetadata;
  const layoutPageBaseProps: LayoutPageBaseProps = {
    seo: {
      description: siteMetadata.defaultDescription,
      image: siteMetadata.defaultImage,
      title: siteMetadata.defaultTitle,
      subtitle: siteMetadata.subtitle,
      twitterUsername: siteMetadata.twitterUsername,
      url: siteMetadata.siteUrl,
    },
    avatar: getImage(data.file),
  };

  return (
    <LayoutPageBase props={layoutPageBaseProps}>
      <GridContainer>
        {posts.map(({ node: post }) => (
          <article key={post.id}>
            <LinkStyled to={post.fields.slug}>
              <UiTypographyH2>{post.frontmatter.title}</UiTypographyH2>
            </LinkStyled>
            <UiTypographyP>
              <UiDateInfo date={post.frontmatter.date}></UiDateInfo>
              {post.excerpt}
            </UiTypographyP>
          </article>
        ))}
      </GridContainer>
    </LayoutPageBase>
  );
};

const LinkStyled = styled(Link)`
  color: ${headings.font.color} !important;
`;

const GridContainer = styled.main`
  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-gap: ${grid.gutterWidth}px;
    grid-template-columns: repeat(2, [col] 1fr);
  }
`;

export const pageQuery = graphql`query data {
  site {
    siteMetadata {
      defaultTitle: title
      subtitle
      titleTemplate
      defaultDescription: description
      siteUrl: url
      defaultImage: image
      twitterUsername
    }
  }
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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
  file(relativePath: {eq: "william.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, placeholder: BLURRED, layout: FIXED)
    }
  }
}
`;

interface QueryData {
  data: {
    site: {
      siteMetadata: {
        defaultTitle: string;
        subtitle: string;
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
    file: ImageDataLike;
  };
}

export default BlogIndex;
