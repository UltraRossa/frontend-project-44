const isPrimeGame = () => {
  const min = 2;
  const max = 100;
  const question = Math.floor((Math.random() * (max - min + 1) + min));
  let correctAnswer;

  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
      return [question, correctAnswer];
    }
  }
  correctAnswer = 'yes';
  return [question, correctAnswer];
};

export default isPrimeGame;
