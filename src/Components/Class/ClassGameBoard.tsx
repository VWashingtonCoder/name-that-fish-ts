import { Component } from "react";
import "./styles/game-board.css";
import { GameBoardProps } from "../Types";

export class ClassGameBoard extends Component<GameBoardProps> {
  state = {
    guess: "",
  };

  render() {
    const { currentFish, handleGuess } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleGuess(this.state.guess);
            this.setState({ guess: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(e) => this.setState({ guess: e.target.value })}
            value={this.state.guess}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
