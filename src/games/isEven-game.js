import getRandomNumber from '../utils.js';

const isEven = (question) => question % 2 === 0;

const genIsEvenGameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default genIsEvenGameData;
