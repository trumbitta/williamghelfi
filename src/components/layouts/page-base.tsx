import React, { FunctionComponent } from 'react';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';
import { SEO } from '../seo/seo.component';

const LayoutPageBase: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <>
      <SEO />

      <UiContainer>
        <ApplicationHeader applicationTitle={title}></ApplicationHeader>

        {children}
      </UiContainer>

      <ApplicationFooter />
    </>
  );
};

export default LayoutPageBase;
