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


export class ClassApp extends Component {
  state = {
    answersLeft: initialFishes.map((fish) => fish.name),
    incorrectCount: 0,
    correctCount: 0,
    totalCount: initialFishes.length,
  };
  render() {
    return (
      <>
        <>
          <ClassScoreBoard 
            incorrectCount={this.state.incorrectCount}
            correctCount={this.state.correctCount}
            answersLeft={this.state.answersLeft}
          />
          {/* <ClassGameBoard 
            
          /> */}
        </>
        {false && (
          <ClassFinalScore 
            totalCount={this.state.totalCount}
            correctCount={this.state.correctCount}
          />
        )}
      </>
    );
  }
}
