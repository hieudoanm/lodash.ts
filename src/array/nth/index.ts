export const nth = <T>(array: T[], n = 0): T => {
  if (n >= 0) {
    return array[n];
  }
  return array[array.length + n];
};

export default nth;
