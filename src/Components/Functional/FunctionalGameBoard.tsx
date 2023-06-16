import "./styles/game-board.css";
import { useState } from "react";
import { GameBoardProps } from "../Types";

export function FunctionalGameBoard(props: GameBoardProps) {
  const { currentFish, handleGuess } = props;
  const [guess, setGuess] = useState("");

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleGuess(guess);
          setGuess("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
