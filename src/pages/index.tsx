import React, { FunctionComponent } from 'react';

import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import LayoutPageBase from '../components/layouts/page-base';
import { UiTypographyP, UiTypographyH2 } from '../components/ui';

const BlogIndex: FunctionComponent<BlogIndexResponse> = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <LayoutPageBase>
      {posts.map(({ node: post }) => (
        <React.Fragment key={post.id}>
          <Link to={post.fields.slug}>
            <UiTypographyH2>{post.frontmatter.title}</UiTypographyH2>
          </Link>
          <UiTypographyP>{post.excerpt}</UiTypographyP>
        </React.Fragment>
      ))}
    </LayoutPageBase>
  );
};

export const pageQuery = graphql`
  query blogIndex {
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

type BlogIndexResponse = {
  data: {
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

export default BlogIndex;
