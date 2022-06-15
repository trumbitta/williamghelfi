import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

const { createFilePath } = require('gatsby-source-filesystem');

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    });
  }
};

type MdxData = {
  allMdx: {
    edges: Array<{
      node: {
        id: string;
        fields: {
          slug: string;
        };
      };
    }>;
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql<MdxData>(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data?.allMdx.edges;

  // We'll call `createPage` for each result
  if (posts) {
    posts.forEach(({ node }, index) => {
      createPage({
        // This is the slug we created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: resolve(`./src/components/layouts/page-post.tsx`),
        // We can use the values in this context in
        // our page layout component
        context: { id: node.id },
      });
    });
  }
};
