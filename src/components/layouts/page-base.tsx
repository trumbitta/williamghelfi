import React, { FunctionComponent } from 'react';

import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { SiteMetadataStaticQueryData } from './site-metadata-query-fragment.graphql';

const LayoutPageBase: FunctionComponent = ({ children }) => {
  const data = useStaticQuery<SiteMetadataStaticQueryData>(
    graphql`
      query {
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
      ></ApplicationHeader>

      {children}
    </UiContainer>
  );
};

export default LayoutPageBase;
