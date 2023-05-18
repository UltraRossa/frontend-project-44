import randomNumber from '../utils.js';

const calcCorrectAnswer = (firstNumber, secondNumber, operator) => {
  let correctAnswer;

  if (operator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }

  return correctAnswer;
};

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const operator = operators[randomNumber(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calcCorrectAnswer(firstNumber, secondNumber, operator);

  return [question, correctAnswer];
};

export default calcGame;
