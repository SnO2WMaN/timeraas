import React from 'react';
import {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config as FontAwesomeConfig} from '@fortawesome/fontawesome-svg-core';
import {Provider as UrqlProvider} from 'urql';

import {DefaultLayout} from '~/components/Layout';
import {localeDetector} from '~/i18n/detector';
import TypesafeI18n from '~/i18n/i18n-react';
import '~/styles/index.css';
import {createUrqlClient} from '~/urql/client';

// eslint-disable-next-line no-process-env
if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED) require('../mocks');

FontAwesomeConfig.autoAddCss = false;

const App = ({
  Component,
  pageProps: {session, ...pageProps},
  router,
}: AppProps) => {
  const detectedLocales = localeDetector(router);

  const urqlClient = createUrqlClient();

  const Layout = Component.layout ?? DefaultLayout;

  return (
    <SessionProvider session={session}>
      <UrqlProvider value={urqlClient}>
        <TypesafeI18n initialLocale={detectedLocales}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TypesafeI18n>
      </UrqlProvider>
    </SessionProvider>
  );
};

export default App;
