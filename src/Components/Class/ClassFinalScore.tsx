import { Component } from "react";

type FinalScoreProps = {
  totalCount: number;
  correctCount: number;
};

export class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    const { totalCount, correctCount } = this.props;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
