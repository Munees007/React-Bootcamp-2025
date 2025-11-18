import Square from "./Square";

// Board component renders 3x3 squares
export default function Board({ squares, onClick }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 60px)",
      gap: "10px"
    }}>
      {squares.map((val, idx) => (
        <Square key={idx} value={val} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
}
