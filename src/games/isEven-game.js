import randomNumber from '../utils.js';

const isEven = (question) => question % 2 === 0;

const isEvenGame = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const question = randomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default isEvenGame;
