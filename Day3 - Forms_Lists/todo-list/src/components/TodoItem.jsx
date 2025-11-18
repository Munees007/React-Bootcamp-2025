export default function TodoItem({ task, index, removeTask }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        padding: "8px",
        background: "#f0f0f0",
        borderRadius: "5px",
      }}
    >
      <span>{task}</span>
      <button
        onClick={() => removeTask(index)}
        style={{
          padding: "5px 10px",
          background: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}
