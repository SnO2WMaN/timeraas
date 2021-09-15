import React from 'react';

import {useViewer} from './useViewer';

export const withSignin = (Page: React.FC | React.VFC) => {
  return () => {
    const viewer = useViewer();
    if (viewer === undefined) return <p>LOADING</p>;
    if (viewer === null) return <p>UNAUTHEN</p>;
    else return <Page />;
  };
};
