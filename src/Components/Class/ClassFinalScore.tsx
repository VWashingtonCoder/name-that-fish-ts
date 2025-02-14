import { Component } from "react";
import { FinalScoreProps } from "../Types";

export class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    const { totalCount, correctCount, resetGame } = this.props;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
        <button className="reset-btn" onClick={resetGame}>
          Play Again?
        </button>
      </div>
    );
  }
}
