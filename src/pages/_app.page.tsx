import React from 'react';
import {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import {ApolloProvider} from '@apollo/client';
import {config as FontAwesomeConfig} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import {DefaultLayout} from '~/components/Layout';
import {createApolloClient} from '~/apollo/client';
import {localeDetector} from '~/i18n/detector';
import TypesafeI18n from '~/i18n/i18n-react';
import '~/styles/index.css';

// eslint-disable-next-line no-process-env
if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED) require('../mocks');

FontAwesomeConfig.autoAddCss = false;

const App = ({
  Component,
  pageProps: {session, ...pageProps},
  router,
}: AppProps) => {
  const detectedLocales = localeDetector(router);

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
