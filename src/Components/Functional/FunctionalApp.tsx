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

export function FunctionalApp() {
  const [currentFishIdx, setCurrentFishIdx] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(
    initialFishes.map((fish) => fish.name)
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  
  const handleGuess = (guess: string) => {
    guess = guess.toLowerCase().trim();
    
    guess === initialFishes[currentFishIdx].name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);

    setAnswersLeft(answersLeft.filter((answer) => answer !== initialFishes[currentFishIdx].name));
    setCurrentFishIdx(currentFishIdx + 1);
  };

  const resetGame = () => {
    setCurrentFishIdx(0);
    setAnswersLeft(initialFishes.map((fish) => fish.name));
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
