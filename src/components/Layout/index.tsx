import clsx from 'clsx';
import React from 'react';

import {Footer} from '../Footer';
import {HeaderNav} from '../HeaderNav';

export const Layout: React.FC = ({children}) => (
  <main className={clsx(['flex', 'flex-col'], ['min-h-screen'])}>
    <HeaderNav className={clsx(['w-full'])} />
    <div className={clsx('flex-grow', 'bg-night-1')}>
      <section className={clsx('container', 'mx-auto')}>{children}</section>
    </div>
    <Footer className={clsx(['w-full'])} />
  </main>
);
