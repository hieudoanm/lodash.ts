import { tail } from '.';

describe('tail', () => {
  it('return b', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });
});
