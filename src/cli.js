import readlineSync from 'readline-sync';

const greetings = () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetings;
