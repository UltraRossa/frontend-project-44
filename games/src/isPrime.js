import checkAnswer from './checkAnswer.js';

const isPrime = (userName) => {
  const min = 2;
  const max = 100;
  const question = Math.floor((Math.random() * (max - min + 1) + min));
  let correctAnswer;

  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
      return checkAnswer(question, correctAnswer, userName);
    }
  }
  correctAnswer = 'yes';
  return checkAnswer(question, correctAnswer, userName);
};

export default isPrime;
