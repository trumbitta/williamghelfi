import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';

export const ApplicationHeaderAvatar: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `);

  return <ImgStyled fixed={data.file.childImageSharp.fixed} />;
};

const ImgStyled = styled(Img)`
  clip-path: circle(50% at 50% 50%);
`;
