import React, { FunctionComponent } from 'react';

import { UiContainer } from '../ui';
import { ApplicationHeader } from '../application-header/application-header.component';
import { ApplicationFooter } from '../application-footer/application-footer.component';

const LayoutPageBase: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <React.Fragment>
      <UiContainer>
        <ApplicationHeader applicationTitle={title}></ApplicationHeader>

        {children}
      </UiContainer>

      <ApplicationFooter />
    </React.Fragment>
  );
};

export default LayoutPageBase;
