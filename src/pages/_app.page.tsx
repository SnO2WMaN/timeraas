import React from 'react';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {detectLocale} from 'typesafe-i18n/detectors';
import {SessionProvider} from 'next-auth/react';

import {createApolloClient} from '~/apollo/client';
import {Locales} from '~/i18n/i18n-types';
import TypesafeI18n from '~/i18n/i18n-react';
import {DefaultLayout} from '~/components/Layout';

import '~/styles/index.css';

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
