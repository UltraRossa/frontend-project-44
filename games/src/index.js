import greetings from './cli.js';
import isEven from './isEven.js';
import calc from './calc.js';
import gcd from './gcd.js';
import progression from './progression.js';
import isPrime from './isPrime.js';

const manage = (gameName) => {
  const userName = greetings();
  const numberOfRounds = 3;
  let currentGame;

  switch (gameName) {
    case 'brain-games':
      return;
    case 'brain-even':
      currentGame = isEven;
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 'brain-calc':
      currentGame = calc;
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      currentGame = gcd;
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      currentGame = progression;
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      currentGame = isPrime;
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".?');
      break;
    default:
  }

  for (let i = 0; i < numberOfRounds; i += 1) {
    if (!currentGame(userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default manage;
