import NextHead from 'next/head';
import React from 'react';

import {useTranslation} from '~/i18n/useTranslation';

export const Head: React.VFC<{title: string}> = ({title}) => {
  const {LL} = useTranslation();
  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://timeraas.vercel.app/" />
      <meta property="og:description" content={LL.Head.description()} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@SnO2WMaN" />
      <meta name="twitter:card" content="summary" />
    </NextHead>
  );
};
