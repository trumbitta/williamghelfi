import React, { FunctionComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { UiTypographyP } from '../components/ui';
import LayoutPageBase, {
  LayoutPageBaseProps,
} from '../components/layouts/page-base';
import { Link } from '../components/link/link.component';

const Privacy: FunctionComponent = () => {
  const layoutPageBaseProps: LayoutPageBaseProps = {
    seo: {
      description: 'Privacy policy.',
      title: 'Privacy policy',
      twitterUsername: 'trumbitta',
      url: 'https://www.williamghelfi.com/privacy-policy',
    },
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
        This website uses Google Analytics, a service which transmits website
        traffic data to Google servers.
        <br />
        This instance of Google Analytics does not identify individual users or
        associate your IP address with any other data held by Google.
      </UiTypographyP>
      <UiTypographyP>
        Reports provided by Google Analytics are used to help me understand
        website traffic and webpage usage.
        <br />
        You may opt out of this tracking at any time by activating the “Do Not
        Track” setting in your browser.
      </UiTypographyP>
    </LayoutPageBase>
  );
};

export default Privacy;
