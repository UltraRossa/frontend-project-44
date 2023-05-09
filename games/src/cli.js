import readlineSync from 'readline-sync';

const greetings = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have you name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greetings;
