import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greetings;
