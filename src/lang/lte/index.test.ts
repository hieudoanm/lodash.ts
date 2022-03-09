import { lte } from '.';

describe('lte', () => {
  it('should return true', () => {
    expect(lte(1, 3)).toEqual(true);
  });

  it('should return true', () => {
    expect(lte(3, 3)).toEqual(true);
  });

  it('should return false', () => {
    expect(lte(3, 1)).toEqual(false);
  });
});
