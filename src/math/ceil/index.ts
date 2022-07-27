export const ceil = (number: number, precision = 0): number => {
  const fixed: string =
    precision !== 0 ? number.toFixed(precision) : `${number}`;
  return Math.ceil(parseFloat(fixed));
};

export default ceil;
