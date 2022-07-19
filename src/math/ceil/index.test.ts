import { ceil } from '.';

describe('ceil', () => {
  it('precision is 0', () => {
    expect(ceil(4.006)).toEqual(5);
  });

  // it('precision is 2', () => {
  //   expect(ceil(6.004, 2)).toEqual(6.01);
  // });

  // it('precision is -2', () => {
  //   expect(ceil(6040, -2)).toEqual(6100);
  // });
});
