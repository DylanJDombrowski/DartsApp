import { useState } from "react";
import GameSetup from "./components/GameSetup";
import ScoreTracker from "./components/ScoreTracker";
import GameResult from "./components/GameResult";

function App() {
  const [gamePhase, setGamePhase] = useState("setup");
  const [playerNames, setPlayerNames] = useState({
    playerOne: "",
    playerTwo: "",
  });
  const [scores, setScores] = useState({ playerOne: 0, playerTwo: 0 });
  const [winningScore, setWinningScore] = useState(301);

  const startGame = (names, winningScore) => {
    setPlayerNames(names);
    setWinningScore(winningScore);
    setGamePhase("inProgress");
  };

  const updateScores = (playerOneScore, playerTwoScore) => {
    const newScores = {
      playerOne: scores.playerOne + playerOneScore,
      playerTwo: scores.playerTwo + playerTwoScore,
    };
    setScores(newScores);

    // Check for a winner
    if (
      newScores.playerOne >= winningScore ||
      newScores.playerTwo >= winningScore
    ) {
      setGamePhase("finished");
    }
  };

  const resetGame = () => {
    setGamePhase("setup");
    setPlayerNames({ playerOne: "", playerTwo: "" });
    setScores({ playerOne: 0, playerTwo: 0 });
    setWinningScore(301); // Reset to default or keep the last winning score?
  };

  const determineWinner = () => {
    const { playerOne, playerTwo } = scores;

    // If both players are below the winning score, no winner yet
    if (playerOne < winningScore && playerTwo < winningScore) {
      return null;
    }

    // If both players reach or exceed the winning score in the same round
    if (playerOne >= winningScore && playerTwo >= winningScore) {
      // Example rule: the player closest to the winning score without going over wins
      const playerOneDiff = playerOne - winningScore;
      const playerTwoDiff = playerTwo - winningScore;

      if (playerOneDiff === playerTwoDiff) {
        return "Tie"; // Or handle a tie differently based on your game rules
      }

      return playerOneDiff < playerTwoDiff
        ? playerNames.playerOne
        : playerNames.playerTwo;
    }

    // Otherwise, the player who first reaches or exceeds the winning score wins
    return playerOne >= winningScore
      ? playerNames.playerOne
      : playerNames.playerTwo;
  };

  return (
    <div>
      {gamePhase === "setup" && <GameSetup onStartGame={startGame} />}
      {gamePhase === "inProgress" && (
        <ScoreTracker
          playerNames={playerNames}
          scores={scores}
          winningScore={winningScore}
          onUpdateScores={updateScores}
        />
      )}
      {gamePhase === "finished" && (
        <GameResult winner={determineWinner()} onResetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
