import randomNumber from '../utils.js';

const calcCorrectAnswer = (firstNumber, secondNumber, operator) => {
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }

  return correctAnswer;
};

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const operator = operators[randomNumber(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calcCorrectAnswer(firstNumber, secondNumber, operator));

  return [question, correctAnswer];
};

export default calcGame;
