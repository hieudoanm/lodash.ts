export const ceil = (number: number, precision = 0): number => {
  const fixed: string = number.toFixed(precision);
  return Math.ceil(parseFloat(fixed));
};

export default ceil;
