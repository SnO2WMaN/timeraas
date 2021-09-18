import {NextPage} from 'next';
import React from 'react';

import {useViewer, Viewer} from './useViewer';

export type SignedInNextPage<TPageProps> = NextPage<
  TPageProps & {viewer: Viewer}
>;
export function withSignin<TPageProps>(Page: SignedInNextPage<TPageProps>) {
  return (props: TPageProps) => {
    const viewer = useViewer();
    if (viewer === undefined) return <p>LOADING</p>;
    if (viewer === null) return <p>UNAUTHEN</p>;
    else return <Page viewer={viewer} {...props} />;
  };
}
