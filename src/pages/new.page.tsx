import clsx from 'clsx';
import React from 'react';

import {Form} from '~/components/NewPage/Form';
import {SignedInNextPage, withSignin} from '~/lib/withSignin';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: SignedInNextPage<PageProps> = ({...props}) => {
  return (
    <>
      <div className={clsx(['py-8'], ['flex'], ['justify-center'])}>
        <Form />
      </div>
    </>
  );
};
export default withSignin(Page);
