import getRandomNumber from '../utils.js';

const calcCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const genCalcGameData = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calcCorrectAnswer(firstNumber, secondNumber, operator));

  return [question, correctAnswer];
};

export default genCalcGameData;
