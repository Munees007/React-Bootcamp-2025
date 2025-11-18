import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task.trim()]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>To-Do List</h2>
      <TodoInput addTask={addTask} />
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} index={index} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}
