import readlineSync from 'readline-sync';
import greetings from './cli.js';

const isEven = () => {
  const userName = greetings();
  const numberOfTries = 3;

  console.log("Answer 'yes' if given number is even. Otherwise answer 'no'.");

  for (let i = 0; i < numberOfTries; i += 1) {
    const question = Math.floor(Math.random() * 101);
    console.log(`Question: ${question}`);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
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
