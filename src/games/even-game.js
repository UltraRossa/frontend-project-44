import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

const genEvenGameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => ({ generateRound: genEvenGameData, description });

export default startEvenGame;
