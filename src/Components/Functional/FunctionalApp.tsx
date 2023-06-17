import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
const answers = initialFishes.map((fish) => fish.name);

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const currentFishIdx = correctCount + incorrectCount;
  const answersLeft = answers.slice(currentFishIdx);

  const handleGuess = (guess: string) => {
    guess = guess.toLowerCase().trim();
    
    guess === initialFishes[currentFishIdx].name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  const resetGame = () => {
    setIncorrectCount(0);
    setCorrectCount(0);
  };

  return (
    <>
      {answersLeft.length > 0 
        ? (
          <>
            <FunctionalScoreBoard 
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <FunctionalGameBoard 
              currentFish={initialFishes[currentFishIdx]}
              handleGuess={handleGuess}
            />
          </>
        ) : (
          <FunctionalFinalScore 
            correctCount={correctCount}
            totalCount={initialFishes.length}
            resetGame={resetGame}
          />
        )
      }
    </>
  );
}
