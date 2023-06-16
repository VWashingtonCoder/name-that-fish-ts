import "./styles/final-score.css";
import { FinalScoreProps } from "../Types";


export const FunctionalFinalScore = ({
  correctCount,
  totalCount,
  resetGame,
}: FinalScoreProps) => (
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
