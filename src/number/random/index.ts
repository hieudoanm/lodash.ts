export const random = (
  lower: number,
  upper: number,
  floating = false,
): number => {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

export default random;
