import React, { FunctionComponent } from 'react';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';
import { SEO, SeoProps } from '../seo/seo.component';

const LayoutPageBase: FunctionComponent<{ props: SeoProps }> = ({
  props,
  children,
}) => {
  return (
    <>
      <SEO {...props} />

      <UiContainer>
        <ApplicationHeader applicationTitle={props.title}></ApplicationHeader>

        {children}
      </UiContainer>

      <ApplicationFooter />
    </>
  );
};

export default LayoutPageBase;
