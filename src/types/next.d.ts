import {ReactElement, ReactNode} from 'react';

declare module 'next/app' {
  interface NextComponentType extends NextComponentType {
    layout?: (page: ReactElement) => ReactNode;
  }
}
