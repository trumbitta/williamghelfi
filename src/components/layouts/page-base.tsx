import React, { FunctionComponent } from 'react';

import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { SiteMetadataStaticQueryData } from './site-metadata-query-fragment.graphql';
import { ApplicationFooter } from '../application-footer/application-footer.component';

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
    <React.Fragment>
      <UiContainer>
        <ApplicationHeader
          applicationTitle={data.site.siteMetadata.title}
        ></ApplicationHeader>

        {children}
      </UiContainer>

      <ApplicationFooter />
    </React.Fragment>
  );
};

export default LayoutPageBase;
