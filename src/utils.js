const randomNumber = (minNumber, maxNumber) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  return result;
};

export default randomNumber;
