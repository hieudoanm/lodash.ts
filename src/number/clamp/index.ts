export const clamp = (number: number, lower?: number, upper?: number) => {
  if (upper === undefined && lower === undefined) {
    return number;
  }

  if (upper === undefined && lower !== undefined) {
    return number > lower ? lower : number;
  }

  return number;
};

export default clamp;
