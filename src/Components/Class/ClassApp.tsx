import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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
]

interface ClassAppState {
  currentFishIdx: number;
  answersLeft: string[];
  incorrectCount: number;
  correctCount: number;
  totalCount: number;
}

export class ClassApp extends Component <object, ClassAppState> {
  state = {
    currentFishIdx: 0,
    answersLeft: initialFishes.map((fish) => fish.name),
    incorrectCount: 0,
    correctCount: 0,
    totalCount: initialFishes.length,
  };
  render() {
    const guessFish = (guess: string) => {
      guess = guess.toLowerCase().trim();

      if (guess === initialFishes[this.state.currentFishIdx].name) {
        this.setState((prevState) => ({
          correctCount: prevState.correctCount + 1,
        }));
      } else {      
        this.setState((prevState) => ({
          incorrectCount: prevState.incorrectCount + 1,
        }));
      }

      this.setState((prevState) => ({
        answersLeft: prevState.answersLeft.filter(
          (answer) => answer !== initialFishes[this.state.currentFishIdx].name
        ),
        currentFishIdx: prevState.currentFishIdx + 1,
      }));
    };
    
    return (
      <>
        {this.state.answersLeft.length > 0 
          ? (
            <>
              <ClassScoreBoard 
                incorrectCount={this.state.incorrectCount}
                correctCount={this.state.correctCount}
                answersLeft={this.state.answersLeft}
              />
              <ClassGameBoard 
                currentFish={initialFishes[this.state.currentFishIdx]}
                guessFish={guessFish}
              />
            </>
          ) : (
            <ClassFinalScore 
              totalCount={this.state.totalCount}
              correctCount={this.state.correctCount}
            />
          )
        }
      </>
    );
  }
}
