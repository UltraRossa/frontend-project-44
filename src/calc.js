import readlineSync from 'readline-sync';
import greetings from './cli.js';

const calc = () => {
  const userName = greetings();
  const numberOfTries = 3;
  const operators = ['+', '-', '*'];

  console.log('What is the result of the expression?');
  const max = 2;
  const min = 0;

  for (let i = 0; i < numberOfTries; i += 1) {
    const firstNumber = Math.floor(Math.random() * 101);
    const secondNumber = Math.floor(Math.random() * 101);
    const operator = operators[Math.floor(Math.random() * (max - min + 1)) + min];
    let correctAnswer;
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);

    if (operator === '+') {
      correctAnswer = firstNumber + secondNumber;
    } else if (operator === '-') {
      correctAnswer = firstNumber - secondNumber;
    } else {
      correctAnswer = firstNumber * secondNumber;
    }

    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
