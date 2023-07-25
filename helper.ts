const MAX_NUMBER_LIMIT = 9999999999;
const MIN_NUMBER_LIMIT = -9999999999;

export const generateRandomNumber = (min: number, max: number) => {
  if (max > MAX_NUMBER_LIMIT || min < MIN_NUMBER_LIMIT) {
    return "😵";
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
