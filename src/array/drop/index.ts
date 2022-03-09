export const drop = <T>(array: T[], n = 1): T[] => {
  const length = array == null ? 0 : array.length;
  return length ? array.slice(n < 0 ? 0 : n, length) : [];
};

export default drop;
