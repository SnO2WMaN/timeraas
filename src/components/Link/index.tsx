import React from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';

export type LinkProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = Omit<NextLinkProps, 'href'> & T;

export const LinkIndex: React.FC<LinkProps> = ({...props}) => (
  <NextLink href="/" {...props} />
);

export const LinkSignIn: React.FC<LinkProps> = ({...props}) => (
  <NextLink href="/api/auth/signin" {...props} />
);
export const LinkSignOut: React.FC<LinkProps> = ({...props}) => (
  <NextLink href="/api/auth/signout" {...props} />
);

export const LinkList: React.FC<LinkProps<{after?: string}>> = ({
  after,
  ...props
}) => {
  if (after) return <NextLink href={`/list?after=${after}`} {...props} />;
  return <NextLink href="/list" {...props} />;
};

export const LinkNew: React.FC<LinkProps> = ({after, ...props}) => (
  <NextLink href="/new" {...props} />
);

export const LinkCountdown: React.FC<LinkProps<{id: string}>> = ({
  id,
  ...props
}) => <NextLink href={`/countdowns/${id}`} {...props} />;

export const LinkCountdownDetails: React.FC<LinkProps<{id: string}>> = ({
  id,
  ...props
}) => <NextLink href={`/countdowns/${id}/details`} {...props} />;
