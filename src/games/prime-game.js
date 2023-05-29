import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question < 2) {
    return false;
  }

  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const genPrimeGameData = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => ({ generateRound: genPrimeGameData, description });

export default startPrimeGame;
