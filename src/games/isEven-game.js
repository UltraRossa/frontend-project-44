import randomNumber from '../utils.js';

const isEven = (question) => question % 2 === 0;

const isEvenGame = () => {
  const minNumberOfRange = 0;
  const maxNumberOfRange = 100;
  const question = randomNumber(minNumberOfRange, maxNumberOfRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default isEvenGame;
