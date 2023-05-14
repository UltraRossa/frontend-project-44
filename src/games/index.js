import readlineSync from 'readline-sync';
import greetings from './cli.js';

const manage = (description, gameFunction) => {
  const userName = greetings();
  const numberOfRounds = 3;
  if (description === '') return;

  console.log(description);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = gameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default manage;
