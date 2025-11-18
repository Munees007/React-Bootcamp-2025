import { useState } from "react";
import Board from "../components/Board";
import {toast} from "react-toastify"
export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (idx) => {
    if (squares[idx] || winner) return;

    const newSquares = [...squares];
    newSquares[idx] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const win = calculateWinner(newSquares);
    if (win) {
        setWinner(win);
        toast.success(`Winner is ${win}`)
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, Helvetica, sans-serif",
      gap: "15px",
      padding: "20px"
    }}>
      <h2>Tic Tac Toe</h2>
      <Board squares={squares} onClick={handleClick} />
      <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}</p>
      <button
        onClick={resetGame}
        style={{
          padding: "10px 20px",
          background: "#84a59d",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

// Game logic to check winner
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
