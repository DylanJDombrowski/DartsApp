import { useState } from "react";
import PropTypes from "prop-types";

const GameSetup = ({ onStartGame }) => {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [winningScore, setWinningScore] = useState("301"); // Default winning score

  GameSetup.propTypes = {
    onStartGame: PropTypes.func.isRequired,
  };

  const handleNameChange = (e, player) => {
    player === "playerOne"
      ? setPlayerOneName(e.target.value)
      : setPlayerTwoName(e.target.value);
  };

  const handleWinningScoreChange = (e) => {
    setWinningScore(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and initialization logic here
    onStartGame({ playerOneName, playerTwoName, winningScore });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player One Name"
        value={playerOneName}
        onChange={(e) => handleNameChange(e, "playerOne")}
      />
      <input
        type="text"
        placeholder="Player Two Name"
        value={playerTwoName}
        onChange={(e) => handleNameChange(e, "playerTwo")}
      />
      <select value={winningScore} onChange={handleWinningScoreChange}>
        <option value="301">301</option>
        <option value="501">501</option>
        <option value="custom">Custom</option>
      </select>
      {winningScore === "custom" && (
        <input
          type="number"
          placeholder="Enter Winning Score"
          onChange={handleWinningScoreChange}
        />
      )}
      <button type="submit">Start Game</button>
    </form>
  );
};

export default GameSetup;
