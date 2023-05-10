import checkAnswer from './checkAnswer.js';

const gcd = (userName) => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  let bigger = Math.max(firstNumber, secondNumber);
  let lesser = Math.min(firstNumber, secondNumber);

  while (bigger % lesser !== 0) {
    const remainder = bigger % lesser;
    bigger = lesser;
    lesser = remainder;
  }

  const correctAnswer = lesser;

  return checkAnswer(question, correctAnswer, userName);
};

export default gcd;
