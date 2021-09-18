import {AppPropsType} from 'next/dist/shared/lib/utils';

declare module 'next/app' {
  interface AppProps extends AppPropsType<P> {
    Component: NextComponentType & {layout?: React.FC};
  }
}
