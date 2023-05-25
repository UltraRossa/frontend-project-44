import getRandomNumber from '../utils.js';

const getProgression = (progressionStartNumber, progressionLength, addingValue) => {
  const progressionNumbers = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      progressionNumbers[i] = progressionStartNumber;
    } else {
      progressionNumbers[i] = progressionNumbers[i - 1] + addingValue;
    }
  }

  return progressionNumbers;
};

const genProgressionGameData = () => {
  const progressionLength = getRandomNumber(5, 10);
  const addingValue = getRandomNumber(1, 10);
  const replacedIndex = Math.floor(Math.random() * progressionLength);
  const progressionStartNumber = getRandomNumber(0, 10);
  const progression = getProgression(progressionStartNumber, progressionLength, addingValue);
  const correctAnswer = String(progression[replacedIndex]);
  progression[replacedIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default genProgressionGameData;
