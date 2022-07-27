import clamp from '.';

describe('clamp', () => {
  it('upper undefined', () => {
    const clamped: number = clamp(10, -5, 5);
    expect(clamped).toEqual(10);
  });
});
