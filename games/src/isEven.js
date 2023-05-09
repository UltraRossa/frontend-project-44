import checkAnswer from './checkAnswer.js';

const isEven = (userName) => {
  const question = Math.floor(Math.random() * 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return checkAnswer(question, correctAnswer, userName);
};

export default isEven;
