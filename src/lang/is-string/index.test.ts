import { isString } from '.';

describe('isString', () => {
  it('should return true', () => {
    expect(isString('abc')).toEqual(true);
  });

  it('should return false', () => {
    expect(isString(1)).toEqual(false);
  });
});
