import {CountdownOrder, CountdownOrderField, OrderDirection} from './codegen';

export const parsePaginationArgs: (props: {
  first?: number | null;
  last?: number | null;
  before?: string | null;
  after?: string | null;
}) =>
  | {first: number; after: string | null}
  | {last: number; before: string | null} = ({first, last, before, after}) => {
  if (first && last) throw new Error('Both "first" and "last" are forbidden');
  else if (first) return {first, after: after || null};
  else if (last) return {last, before: before || null};
  else throw new Error('Either first or last is required');
};

export const parseCountdownOrder = ({
  field,
  order,
}: CountdownOrder): {
  field: 'igniteAt' | 'createdAt' | 'updatedAt';
  order: 'asc' | 'desc';
} => {
  const parsedOrder = order === OrderDirection.Asc ? 'asc' : 'desc';
  switch (field) {
    case CountdownOrderField.IgniteAt:
      return {field: 'igniteAt', order: parsedOrder};
    case CountdownOrderField.CreatedAt:
      return {field: 'createdAt', order: parsedOrder};
    case CountdownOrderField.UpdatedAt:
      return {field: 'updatedAt', order: parsedOrder};
  }
};
