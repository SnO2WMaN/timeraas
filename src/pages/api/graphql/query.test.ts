import * as client from 'next-auth/react';

import {getViewer} from './query';

jest.mock('next-auth/react');

describe('Query Resolvers', () => {
  describe('getViewer', () => {
    it('successful', async () => {
      jest.spyOn(client, 'getSession').mockResolvedValue({
        user: {
          name: '1',
          email: '1',
          image: '1',
        },
        expires: '',
      });

      const actual = await getViewer({});

      expect(actual).toStrictEqual({
        alias: 'alias',
        displayName: 'displayName',
        picture: 'picture',
      });
    });
  });
});
