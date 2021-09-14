import {getViewer} from './query';

jest.mock('next-auth/react');

describe('Query Resolvers', () => {
  describe('getViewer', () => {
    it('successful', async () => {
      const actual = await getViewer({}, {userId: '1'});

      expect(actual).toStrictEqual({
        id: '1',
        name: 'Name',
        image: 'image url',
      });
    });
  });
});
