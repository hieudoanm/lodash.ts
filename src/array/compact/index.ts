export const compact = <T>(array: T[]): T[] => {
  let resIndex = 0;
  const result: T[] = [];

  if (array == null) {
    return result;
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
};

export default compact;
