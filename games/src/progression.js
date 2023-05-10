import checkAnswer from './checkAnswer.js';

const progression = (userName) => {
  const minLength = 5;
  const maxLength = 10;
  const progressionLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
  const plus = Math.floor((Math.random() * 10) + 1);
  const progressionNumbers = [];
  const replacedIndex = Math.floor(Math.random() * progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      progressionNumbers[i] = (Math.floor(Math.random() * 10));
    } else {
      progressionNumbers[i] = progressionNumbers[i - 1] + plus;
    }
  }

  const correctAnswer = progressionNumbers[replacedIndex];
  progressionNumbers[replacedIndex] = '..';
  const question = progressionNumbers.join(' ');

  return checkAnswer(question, correctAnswer, userName);
};

export default progression;
