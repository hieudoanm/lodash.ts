import { gte } from '.';

describe('gte', () => {
  it('should return true', () => {
    expect(gte(3, 1)).toEqual(true);
  });

  it('should return true', () => {
    expect(gte(3, 3)).toEqual(true);
  });

  it('should return false', () => {
    expect(gte(1, 3)).toEqual(false);
  });
});
