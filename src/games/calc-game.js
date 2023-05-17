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
  const maxOperatorIndex = 2;
  const minOperatorIndex = 0;
  const minNumberOfRange = 0;
  const maxNumberOfRange = 100;

  const firstNumber = randomNumber(minNumberOfRange, maxNumberOfRange);
  const secondNumber = randomNumber(minNumberOfRange, maxNumberOfRange);
  const operator = operators[randomNumber(minOperatorIndex, maxOperatorIndex)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calcCorrectAnswer(firstNumber, secondNumber, operator);

  return [question, correctAnswer];
};

export default calcGame;
