import readlineSync from 'readline-sync';

const checkAnswer = (question, correctAnswer, userName) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${userName}`);
  return false;
};

export default checkAnswer;
