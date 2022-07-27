import { isBoolean } from '.';

describe('isBoolean', () => {
  it('should return true', () => {
    expect(isBoolean(false)).toEqual(true);
  });

  it('should return false', () => {
    expect(isBoolean(null)).toEqual(false);
  });
});
