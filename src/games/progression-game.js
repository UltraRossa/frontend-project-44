import randomNumber from '../utils.js';

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

const progressionGame = () => {
  const progressionLength = randomNumber(5, 10);
  const addingValue = randomNumber(1, 10);
  const replacedIndex = Math.floor(Math.random() * progressionLength);
  const progressionStartNumber = randomNumber(0, 10);
  const progression = getProgression(progressionStartNumber, progressionLength, addingValue);
  const correctAnswer = String(progression[replacedIndex]);
  progression[replacedIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default progressionGame;
