import randomNumber from '../utils.js';

const isPrime = (question) => {
  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const question = randomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default isPrimeGame;
