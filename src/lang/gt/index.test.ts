import { gt } from '.';

describe('gt', () => {
  it('should return true', () => {
    expect(gt(3, 1)).toEqual(true);
  });

  it('should return false', () => {
    expect(gt(3, 3)).toEqual(false);
  });

  it('should return false', () => {
    expect(gt(1, 3)).toEqual(false);
  });
});
