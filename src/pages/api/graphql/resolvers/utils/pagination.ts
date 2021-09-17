import {Connection, OrderByArgs, PaginationArgs} from './types';

export const serializeCursor = (payload: {id: string}) =>
  Buffer.from(JSON.stringify(payload)).toString('base64url');

export const deserializeCursor = (cursor: string): {id: string} =>
  JSON.parse(Buffer.from(cursor, 'base64url').toString());

export const parsePrismaPagination = (
  props: PaginationArgs,
):
  | {skip: number; take: number; cursor: {id: string}}
  | {skip: number; take: number} =>
  'first' in props
    ? {
        skip: 1,
        take: props.first,
        cursor: props.after ? deserializeCursor(props.after) : undefined,
      }
    : {
        skip: 1,
        take: props.last,
        cursor: props.before ? deserializeCursor(props.before) : undefined,
      };
export const parsePrismaCountdownOrderBy = ({
  field,
  order,
}: OrderByArgs<'igniteAt' | 'createdAt' | 'updatedAt'>):
  | {igniteAt: 'asc' | 'desc'}
  | {createdAt: 'asc' | 'desc'}
  | {updatedAt: 'asc' | 'desc'} => {
  switch (field) {
    case 'igniteAt':
      return {igniteAt: order};
    case 'createdAt':
      return {createdAt: order};
    case 'updatedAt':
      return {updatedAt: order};
  }
};

export const transformConnection = <T extends {id: string}>(
  result: T[],
): Connection<T> => {
  const first = result.at(0);
  const last = result.at(-1);
  return {
    edges: result.map((countdown) => ({
      node: countdown,
      cursor: serializeCursor({id: countdown.id}),
    })),
    pageInfo: {
      startCursor: first ? serializeCursor({id: first.id}) : null,
      endCursor: last ? serializeCursor({id: last.id}) : null,
    },
  };
};
