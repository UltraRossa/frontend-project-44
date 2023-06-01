import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (progressionStartNumber, progressionLength, step) => {
  const progressionNumbers = [];
  let currentNumber = progressionStartNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    progressionNumbers.push(currentNumber);
    currentNumber += step;
  }

  return progressionNumbers;
};

const genProgressionGameData = () => {
  const progressionLength = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 10);
  const replacedIndex = Math.floor(Math.random() * progressionLength);
  const progressionStartNumber = getRandomNumber(0, 10);
  const progression = getProgression(progressionStartNumber, progressionLength, step);
  const correctAnswer = String(progression[replacedIndex]);
  progression[replacedIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => ({ generateRound: genProgressionGameData, description });

export default startProgressionGame;
