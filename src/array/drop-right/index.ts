export const dropRight = <T>(array: T[], n = 1) => {
  const length = array == null ? 0 : array.length;
  n = length - n;
  return length ? array.slice(0, n < 0 ? 0 : n) : [];
};

export default dropRight;
