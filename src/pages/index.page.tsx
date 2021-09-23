import {NextPage} from 'next';
import React from 'react';

import {Head} from '~/components/Head';
import {useTranslation} from '~/i18n/useTranslation';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({...props}) => {
  const {LL} = useTranslation();

  return (
    <>
      <Head title={LL.Head.Title.NewPage()} />
      <p>Wow</p>
    </>
  );
};
export default Page;
