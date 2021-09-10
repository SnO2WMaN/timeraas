import clsx from 'clsx';
import {NextPage} from 'next';
import React from 'react';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({...props}) => {
  return (
    <>
      <main className={clsx(['w-full', 'min-h-screen'])}>
        <p>Wow</p>
      </main>
    </>
  );
};
export default Page;
