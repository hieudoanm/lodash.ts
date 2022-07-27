import { last } from '.';

describe('last', () => {
  it('return 3', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });
});
