export const sum = (numbers: number[]): number => {
  const initialValue = 0;
  return numbers.reduce((previoustValue: number, currentValue: number) => {
    return previoustValue + currentValue;
  }, initialValue);
};

export default sum;
