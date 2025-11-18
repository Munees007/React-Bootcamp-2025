// A single square of the board
export default function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        background: "#f6bd60",
        border: "2px solid #333",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.2s"
      }}
      onMouseEnter={e => e.currentTarget.style.background="#ffe8d6"}
      onMouseLeave={e => e.currentTarget.style.background="#f6bd60"}
    >
      {value}
    </button>
  );
}
