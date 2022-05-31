import React, { FunctionComponent } from 'react';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';
import { SEO, SeoProps } from '../seo/seo.component';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const LayoutPageBase: FunctionComponent<{
  props: LayoutPageBaseProps;
}> = ({ props, children }) => {
  return (
    <>
      <SEO {...props.seo} />

      <UiContainer>
        <ApplicationHeader
          applicationTitle={props.seo.title}
          subtitle={props.seo.subtitle}
          avatar={props.avatar}
        ></ApplicationHeader>

        {children}
      </UiContainer>

      <ApplicationFooter />
    </>
  );
};

export interface LayoutPageBaseProps {
  seo: SeoProps;
  avatar?: IGatsbyImageData;
}

export default LayoutPageBase;
