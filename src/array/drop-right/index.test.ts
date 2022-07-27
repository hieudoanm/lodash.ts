import { dropRight } from '.';

describe('dropRight', () => {
  it('should return [1, 2]', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  });

  it('should return [1]', () => {
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
  });

  it('should return []', () => {
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
  });

  it('should return [1, 2, 3]', () => {
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});
