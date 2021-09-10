import clsx from 'clsx';
import React from 'react';

import {Footer} from '../Footer';
import {GlobalNav} from '../GlobalNav';

export const Layout: React.FC = ({children}) => (
  <main className={clsx(['flex', 'flex-col'], ['min-h-screen'])}>
    <GlobalNav className={clsx(['w-full'], ['h-16'])} />
    <div className={clsx('flex-grow', 'bg-night-2')}>
      <section className={clsx('container', 'mx-auto')}>{children}</section>
    </div>
    <Footer className={clsx(['w-full'])} />
  </main>
);
