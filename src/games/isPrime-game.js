import getRandomNumber from '../utils.js';

const isPrime = (question) => {
  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const genIsPrimeGameData = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default genIsPrimeGameData;
