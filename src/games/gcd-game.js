const gcdGame = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  let biggerNumber = Math.max(firstNumber, secondNumber);
  let lesserNumber = Math.min(firstNumber, secondNumber);

  while (biggerNumber % lesserNumber !== 0) {
    const remainder = biggerNumber % lesserNumber;
    biggerNumber = lesserNumber;
    lesserNumber = remainder;
  }

  const correctAnswer = lesserNumber;

  return [question, correctAnswer];
};

export default gcdGame;
