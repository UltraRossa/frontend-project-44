import readlineSync from 'readline-sync';
import greetings from './cli.js';

const isEven = () => {
  const userName = greetings();
  const numbers = [15, 6, 7];

  console.log("Answer 'yes' if given number is even. Otherwise answer 'no'.");

  for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const correctAnswer = numbers[i] % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
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

export default isEven;
