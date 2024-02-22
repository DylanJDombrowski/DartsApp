import PropTypes from "prop-types";

const GameResult = ({ winner, onResetGame }) => {
  return (
    <div>
      {winner ? (
        <h2>Congratulations, {winner} wins!</h2>
      ) : (
        <h2>It&apos;s a tie!</h2>
      )}
      <button onClick={onResetGame}>Play Again</button>
    </div>
  );
};

GameResult.propTypes = {
  winner: PropTypes.string,
  onResetGame: PropTypes.func.isRequired,
};

export default GameResult;
