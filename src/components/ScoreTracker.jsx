import { useState } from "react";
import PropTypes from "prop-types";

const ScoreTracker = ({ playerNames, updateScores, checkForWinner }) => {
  const [playerOneRoundScore, setPlayerOneRoundScore] = useState(0);
  const [playerTwoRoundScore, setPlayerTwoRoundScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateScores(playerOneRoundScore, playerTwoRoundScore);
    checkForWinner();
    setPlayerOneRoundScore(0);
    setPlayerTwoRoundScore(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{playerNames.playerOne}&apos;s Score:</label>
        <input
          type="number"
          value={playerOneRoundScore}
          onChange={(e) => setPlayerOneRoundScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label>{playerNames.playerTwo}&apos;s Score:</label>
        <input
          type="number"
          value={playerTwoRoundScore}
          onChange={(e) => setPlayerTwoRoundScore(Number(e.target.value))}
        />
      </div>
      <button type="submit">Submit Scores</button>
    </form>
  );
};

ScoreTracker.propTypes = {
  playerNames: PropTypes.object.isRequired,
  updateScores: PropTypes.func.isRequired,
  checkForWinner: PropTypes.func.isRequired,
};

export default ScoreTracker;
