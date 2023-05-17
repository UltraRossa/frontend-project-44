import randomNumber from '../utils.js';

const getProgression = (progressionLength, addingValue) => {
  const progressionNumbers = [];
  const minProgLengthNumber = 0;
  const maxProgLengthNumber = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      progressionNumbers[i] = randomNumber(minProgLengthNumber, maxProgLengthNumber);
    } else {
      progressionNumbers[i] = progressionNumbers[i - 1] + addingValue;
    }
  }
  return progressionNumbers;
};

const progressionGame = () => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const minAddingValue = 1;
  const maxAddingValue = 10;
  const progressionLength = randomNumber(minProgressionLength, maxProgressionLength);
  const addingValue = randomNumber(minAddingValue, maxAddingValue);
  const replacedIndex = Math.floor(Math.random() * progressionLength);
  const progressionNumbers = getProgression(progressionLength, addingValue);

  const correctAnswer = progressionNumbers[replacedIndex];
  progressionNumbers[replacedIndex] = '..';
  const question = progressionNumbers.join(' ');

  return [question, correctAnswer];
};

export default progressionGame;
