import { chunk } from '.';

describe('chunk', () => {
  it('should array 2 chunk of array of 2', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('should array 2 chunk of array of 3', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });
});
