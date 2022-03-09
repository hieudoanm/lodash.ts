import { head } from '.';

describe('head', () => {
  it('return 1', () => {
    expect(head([1, 2, 3])).toEqual(1);
  });
});
