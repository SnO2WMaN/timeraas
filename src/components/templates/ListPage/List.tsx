import clsx from 'clsx';
import gql from 'graphql-tag';
import React, {useEffect, useState} from 'react';

import {
  CountdownOrderField,
  OrderDirection,
  useGetCountdownsQuery,
} from './List.codegen';
import {ListItem, ListItemProps} from './ListItem';

import {IconLoading} from '~/components/Icon';

export {CountdownOrderField, OrderDirection} from './List.codegen';

const GetCountdownsQuery = gql`
  query GetCountdowns(
    $viewerId: ID!
    $first: Int!
    $after: String
    $order: OrderDirection!
    $field: CountdownOrderField!
  ) {
    user(id: $viewerId) {
      id
      createdCountdowns(
        first: $first
        after: $after
        order: {order: $order, field: $field}
      ) {
        edges {
          node {
            id
            title
            igniteAt
            createdAt
            updatedAt
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export type ComponentProps =
  | {className?: string} & (
      | {loading: true}
      | {countdowns: ListItemProps['countdown'][]}
    );
export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  return (
    <div className={clsx(className)}>
      {'loading' in props && (
        <div className={clsx('flex', 'items-center')}>
          <IconLoading />
        </div>
      )}
      {'countdowns' in props && props.countdowns.length === 0 && <p>Nothing</p>}
      {'countdowns' in props && props.countdowns.length >= 1 && (
        <div
          className={clsx(
            ['grid'],
            ['grid-cols-1', 'lg:grid-cols-2'],
            ['gap-x-4'],
            ['gap-y-4'],
          )}
        >
          {props.countdowns.map((countdown) => (
            <ListItem key={countdown.id} countdown={countdown} />
          ))}
        </div>
      )}
    </div>
  );
};

export type ListProps = {
  className?: string;
  firstByte: {
    viewerId: string;
    first: number;
    after: string | null;
    order: OrderDirection;
    field: CountdownOrderField;
  };
};
export const List: React.VFC<ListProps> = ({
  firstByte: {viewerId, ...firstByte},
  ...props
}) => {
  const [countdowns, setCountdowns] = useState<ListItemProps['countdown'][]>(
    [],
  );
  const [after, setAfter] = useState(firstByte.after);
  const [first] = useState(firstByte.first);
  const [field] = useState(firstByte.field);
  const [order] = useState(firstByte.order);
  const {data, loading, fetchMore} = useGetCountdownsQuery({
    variables: {viewerId, after, first, field, order},
  });

  useEffect(() => {
    if (!loading && data) {
      setCountdowns((prev) => [
        ...prev,
        ...data.user.createdCountdowns.edges.map(({node}) => ({
          id: node.id,
          title: node.title,
          igniteAt: new Date(node.igniteAt),
          createdAt: new Date(node.createdAt),
          updatedAt: new Date(node.updatedAt),
        })),
      ]);
      setAfter(() => data.user.createdCountdowns.pageInfo.endCursor || null);
    }
  }, [data, loading]);

  useEffect(() => {
    setCountdowns(() => []);
    setAfter(null);
  }, [order, field]);

  if (loading) return <Component {...props} loading />;
  return <Component {...props} countdowns={countdowns} />;
};
