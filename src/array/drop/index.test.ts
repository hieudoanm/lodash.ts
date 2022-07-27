import { drop } from '.';

describe('drop', () => {
  it('should return [2, 3]', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  it('should return [3]', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  it('should return []', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  it('should return [1, 2, 3]', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});
