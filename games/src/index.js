import greetings from './cli.js';
import isEven from './isEven.js';
import calc from './calc.js';
// import isEven from './isEven.js';

const manage = (gameName) => {
  const userName = greetings();
  const numberOfRounds = 3;
  let currentGame;

  switch (gameName) {
    case 'brain-games':
      return;
    case 'brain-even':
      currentGame = isEven;
      console.log("Answer 'yes' if given number is even. Otherwise answer 'no'.");
      break;
    case 'brain-calc':
      currentGame = calc;
      console.log('What is the result of the expression?');
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
