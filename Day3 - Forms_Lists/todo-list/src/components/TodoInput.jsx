import { useState } from "react";

export default function TodoInput({ addTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleAdd = () => {
    addTask(taskInput);
    setTaskInput("");
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={taskInput}
        placeholder="Enter a task"
        onChange={(e) => setTaskInput(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 15px" }}>
        Add
      </button>
    </div>
  );
}
