import NextHead from 'next/head';
import React from 'react';

export const Head: React.VFC<{title: string}> = ({title}) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};
