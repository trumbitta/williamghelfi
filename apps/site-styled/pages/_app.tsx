import { AppProps } from 'next/app';
import Head from 'next/head';

// Libs
import { GlobalStyle } from '@wg/shared/theme';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
