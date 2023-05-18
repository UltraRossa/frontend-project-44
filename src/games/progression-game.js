import randomNumber from '../utils.js';

const getProgression = (progStartNumber, progressionLength, addingValue) => {
  const progressionNumbers = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      progressionNumbers[i] = progStartNumber;
    } else {
      progressionNumbers[i] = progressionNumbers[i - 1] + addingValue;
    }
  }
  return progressionNumbers;
};

const progressionGame = () => {
  const progressionLength = randomNumber(5, 10);
  const addingValue = randomNumber(1, 10);
  const replacedIndex = Math.floor(Math.random() * progressionLength);
  const progStartNumber = randomNumber(0, 10);
  const progressionNumbers = getProgression(progStartNumber, progressionLength, addingValue);

  const correctAnswer = progressionNumbers[replacedIndex];
  progressionNumbers[replacedIndex] = '..';
  const question = progressionNumbers.join(' ');

  return [question, correctAnswer];
};

export default progressionGame;
