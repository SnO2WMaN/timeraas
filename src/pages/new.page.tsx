import clsx from 'clsx';
import React from 'react';

import {Head} from '~/components/Head';
import {Form} from '~/components/NewPage/Form';
import {useTranslation} from '~/i18n/useTranslation';
import {SignedInNextPage, withSignin} from '~/lib/withSignin';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: SignedInNextPage<PageProps> = ({...props}) => {
  const {LL} = useTranslation();
  return (
    <>
      <Head title={LL.Head.Title.NewPage()} />
      <div className={clsx(['py-8'], ['flex'], ['justify-center'])}>
        <Form />
      </div>
    </>
  );
};
export default withSignin(Page);
