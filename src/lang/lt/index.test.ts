import { lt } from '.';

describe('lt', () => {
  it('should return true', () => {
    expect(lt(1, 3)).toEqual(true);
  });

  it('should return false', () => {
    expect(lt(3, 3)).toEqual(false);
  });

  it('should return false', () => {
    expect(lt(3, 1)).toEqual(false);
  });
});
