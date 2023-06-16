import "./styles/score-board.css";
import { ScoreBoardProps } from "../Types";
//  Where the score is presented to the user

export function FunctionalScoreBoard(props: ScoreBoardProps) {
  const { incorrectCount, correctCount, answersLeft } = props;
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
