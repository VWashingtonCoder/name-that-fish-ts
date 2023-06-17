import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

interface ClassAppState {
  incorrectCount: number;
  correctCount: number;
}

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

export class ClassApp extends Component<object, ClassAppState> {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const { correctCount, incorrectCount } = this.state;
    const currentFishIdx = correctCount + incorrectCount;
    const answersLeft = answers.slice(currentFishIdx);

    const handleGuess = (guess: string) => {
      guess = guess.toLowerCase().trim();

      if (guess === answers[currentFishIdx]) {
        this.setState((prevState) => ({
          correctCount: prevState.correctCount + 1,
        }));
      } else {
        this.setState((prevState) => ({
          incorrectCount: prevState.incorrectCount + 1,
        }));
      }
    };

    const resetGame = () => {
      this.setState({
        incorrectCount: 0,
        correctCount: 0,
      });
    };

    return (
      <>
        {answersLeft.length > 0 ? (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              currentFish={initialFishes[currentFishIdx]}
              handleGuess={handleGuess}
            />
          </>
        ) : (
          <ClassFinalScore
            totalCount={initialFishes.length}
            correctCount={correctCount}
            resetGame={resetGame}
          />
        )}
      </>
    );
  }
}
