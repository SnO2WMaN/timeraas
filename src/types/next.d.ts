/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

declare module 'next' {
  type NextPage2<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
    layout?: React.FC;
  };
}

declare module 'next/app' {
  type AppProps = AppProps & {
    Component: NextComponentType & {layout?: React.FC};
  };
}
