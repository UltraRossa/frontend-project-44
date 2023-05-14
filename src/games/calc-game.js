const calcGame = () => {
  const operators = ['+', '-', '*'];
  const max = 2;
  const min = 0;

  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const operator = operators[Math.floor(Math.random() * (max - min + 1)) + min];
  let correctAnswer;
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  if (operator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }

  return [question, correctAnswer];
};

export default calcGame;
