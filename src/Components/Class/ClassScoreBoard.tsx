import { Component } from "react";
import "./styles/score-board.css";
import { ScoreBoardProps } from "../Types";

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    const { incorrectCount, correctCount, answersLeft } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
