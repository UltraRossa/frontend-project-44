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
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const biggerNumber = Math.max(firstNumber, secondNumber);
  const lesserNumber = Math.min(firstNumber, secondNumber);
  const correctAnswer = getGcd(biggerNumber, lesserNumber);

  return [question, correctAnswer];
};

export default gcdGame;
