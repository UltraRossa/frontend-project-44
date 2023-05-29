import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const numberOfOperators = operators.length - 1;

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
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, numberOfOperators)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calcCorrectAnswer(firstNumber, secondNumber, operator));

  return [question, correctAnswer];
};

const startCalcGame = () => ({ generateRound: genCalcGameData, description });

export default startCalcGame;
