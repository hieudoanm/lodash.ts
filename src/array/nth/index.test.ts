import { nth } from '.';

describe('nth', () => {
  it('return b', () => {
    expect(nth(['a', 'b', 'c', 'd'], 1)).toEqual('b');
  });

  it('return c', () => {
    expect(nth(['a', 'b', 'c', 'd'], -2)).toEqual('c');
  });
});
