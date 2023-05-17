import randomNumber from '../utils.js';

const getGcd = (bigger, lesser) => {
  let biggerNumber = bigger;
  let lesserNumber = lesser;

  while (biggerNumber % lesserNumber !== 0) {
    const remainder = biggerNumber % lesserNumber;
    biggerNumber = lesserNumber;
    lesserNumber = remainder;
  }
  return lesserNumber;
};

const gcdGame = () => {
  const minNumberOfRange = 0;
  const maxNumberOfRange = 100;
  const firstNumber = randomNumber(minNumberOfRange, maxNumberOfRange);
  const secondNumber = randomNumber(minNumberOfRange, maxNumberOfRange);
  const question = `${firstNumber} ${secondNumber}`;
  const biggerNumber = Math.max(firstNumber, secondNumber);
  const lesserNumber = Math.min(firstNumber, secondNumber);
  const correctAnswer = getGcd(biggerNumber, lesserNumber);

  return [question, correctAnswer];
};

export default gcdGame;
