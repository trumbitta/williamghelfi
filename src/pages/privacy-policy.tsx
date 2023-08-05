import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import LayoutPageBase, {
  LayoutPageBaseProps,
} from '../components/layouts/page-base';
import { Link } from '../components/link/link.component';

const Privacy = () => {
  const layoutPageBaseProps: LayoutPageBaseProps = {
    seo: {
      description: 'Privacy policy.',
      title: 'Privacy policy',
      twitterUsername: 'trumbitta',
      url: 'https://code.williamghelfi.com/privacy-policy',
    },
  };

  return (
    <LayoutPageBase props={layoutPageBaseProps}>
      <p>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
          Back to home
        </Link>
      </p>

      <p>
        This website uses Google Analytics, a service which transmits website
        traffic data to Google servers.
        <br />
        This instance of Google Analytics does not identify individual users or
        associate your IP address with any other data held by Google.
      </p>
      <p>
        Reports provided by Google Analytics are used to help me understand
        website traffic and webpage usage.
        <br />
        You may opt out of this tracking at any time by activating the “Do Not
        Track” setting in your browser.
      </p>
    </LayoutPageBase>
  );
};

export default Privacy;
