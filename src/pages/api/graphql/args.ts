import {CountdownOrder, CountdownOrderField, OrderDirection} from './codegen';

export const parseCountdownOrder = ({
  field,
  order,
}: CountdownOrder):
  | {igniteAt: 'asc' | 'desc'}
  | {createdAt: 'asc' | 'desc'}
  | {updatedAt: 'asc' | 'desc'} => {
  const parsedOrder = order === OrderDirection.Asc ? 'asc' : 'desc';
  switch (field) {
    case CountdownOrderField.IgniteAt:
      return {igniteAt: parsedOrder};
    case CountdownOrderField.CreatedAt:
      return {createdAt: parsedOrder};
    case CountdownOrderField.UpdatedAt:
      return {updatedAt: parsedOrder};
  }
};
