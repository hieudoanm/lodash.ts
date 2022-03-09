import { stubObject } from '.';

describe('stubObject', () => {
  it('return empty object', () => {
    expect(stubObject()).toEqual({});
  });
});
