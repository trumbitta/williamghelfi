import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';
import { getImage, ImageDataLike } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { UiTypographyP, UiTypographyA } from '../components/ui';
import LayoutPageBase, {
  LayoutPageBaseProps,
} from '../components/layouts/page-base';
import { Link } from '../components/link/link.component';

const BiP: FunctionComponent<QueryData> = ({ data }) => {
  const layoutPageBaseProps: LayoutPageBaseProps = {
    seo: {
      description:
        'An ebook for starters. Written to help you get productive as fast as you can, without getting stuck or going too much in depth into the official docs.',
      title: 'Bootstrap In Practice',
      twitterUsername: 'trumbitta',
      url: 'https://www.williamghelfi.com/bootstrap-in-practice',
    },
    avatar: getImage(data.file),
  };

  return (
    <LayoutPageBase props={layoutPageBaseProps}>
      <UiTypographyP>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
          Back to home
        </Link>
      </UiTypographyP>

      <UiTypographyP>
        The book was for the earliest releases of Bootstrap 3.
        <br />
        Bootstrap is now at version 4, heading for 5.
      </UiTypographyP>
      <UiTypographyP>That's why the book is now free. Enjoy!</UiTypographyP>
      <UiTypographyP>
        <UiTypographyA href="/bootstrap-in-practice/Bootstrap_In_Practice-Complete.zip">
          Download for free [PDF &middot; 30MB]
        </UiTypographyA>
      </UiTypographyP>
    </LayoutPageBase>
  );
};

export const pageQuery = graphql`query bipImage {
  file(relativePath: {eq: "bootstrap-in-practice.png"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, placeholder: BLURRED, layout: FIXED)
    }
  }
}
`;

interface QueryData {
  data: {
    file: ImageDataLike;
  };
}

export default BiP;
