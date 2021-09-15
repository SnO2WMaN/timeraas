import clsx from 'clsx';
import gql from 'graphql-tag';
import React from 'react';

import {
  CountdownOrderField,
  OrderDirection,
  useGetCountdownsQuery,
} from './List.codegen';

export {CountdownOrderField, OrderDirection} from './List.codegen';

const GetCountdownsQuery = gql`
  query GetCountdowns(
    $first: Int!
    $after: String
    $order: OrderDirection!
    $field: CountdownOrderField!
  ) {
    viewer {
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

export type ListProps = {
  className?: string;
  firstByte: {
    first: number;
    after?: string;
    order: OrderDirection;
    field: CountdownOrderField;
  };
};
export const List: React.VFC<ListProps> = ({className, firstByte}) => {
  const {data, loading} = useGetCountdownsQuery({
    variables: {...firstByte},
  });

  return (
    <div className={clsx(className)}>
      {loading && <p>LOADING</p>}
      {!loading && data && <p>{JSON.stringify(data)}</p>}
      <p>O</p>
    </div>
  );
};

export const Countdown = () => {};
