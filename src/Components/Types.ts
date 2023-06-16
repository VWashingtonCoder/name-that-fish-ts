export type GameBoardProps = {
    currentFish: {
      name: string;
      url: string;
    };
    handleGuess: (guess: string) => void;
  };

export type FinalScoreProps = {
  correctCount: number;
  totalCount: number;
  resetGame: () => void;
};

export type ScoreBoardProps = {
    incorrectCount: number;
    correctCount: number;
    answersLeft: string[];
  };
