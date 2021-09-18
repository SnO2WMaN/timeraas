import {formatDate} from './formatDate';

describe('formatDate()', () => {
  it.each([
    [
      {date: '2020-01-01', time: '00:00', timeZone: 'Asia/Tokyo'},
      new Date('2019-12-31T15:00:00.000Z'),
    ],
    [
      {date: '2020-01-01', time: '00:00', timeZone: 'Etc/GMT'},
      new Date('2020-01-01T00:00:00.000Z'),
    ],
  ])('%j', (args, expected) => {
    const actual = formatDate(args);
    expect(actual).toStrictEqual(expected);
  });
});
