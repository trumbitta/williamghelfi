import React, { FunctionComponent } from 'react';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';
import { SEO, SeoProps } from '../seo/seo.component';
import { ApplicationHeaderAvatarProps } from '../application-header/application-header-avatar/application-header-avatar';

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
  avatar: ApplicationHeaderAvatarProps;
}

export default LayoutPageBase;
