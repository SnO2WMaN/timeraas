import React from 'react';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {detectLocale} from 'typesafe-i18n/detectors';
import {SessionProvider} from 'next-auth/react';
import {config as FontAwesomeConfig} from '@fortawesome/fontawesome-svg-core';

import {createApolloClient} from '~/apollo/client';
import {DefaultLayout} from '~/components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Locales} from '~/i18n/i18n-types';
import TypesafeI18n from '~/i18n/i18n-react';

import '~/styles/index.css';

FontAwesomeConfig.autoAddCss = false;

// eslint-disable-next-line no-process-env
if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED) require('../mocks');

const App = ({
  Component,
  pageProps: {session, ...pageProps},
  router,
}: AppProps) => {
  const detectedLocales = detectLocale(
    router.defaultLocale as Locales,
    router.locales as Locales[],
    () => (router.locale ? [router.locale] : []),
  );

  const apolloClient = createApolloClient();

  const Layout = Component.layout ?? DefaultLayout;

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <TypesafeI18n initialLocale={detectedLocales}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TypesafeI18n>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
