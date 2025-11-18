import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses(prev => [...prev, expense]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/add">Add Expense</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home expenses={expenses} />} />
        <Route path="/add" element={<AddExpense onAddExpense={addExpense} />} />
      </Routes>
    </div>
  );
}
