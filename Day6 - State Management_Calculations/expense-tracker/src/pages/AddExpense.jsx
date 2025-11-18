import { useState } from "react";

export default function AddExpense({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({
      title,
      amount: parseFloat(amount),
      category,
      id: Date.now()
    });

    setTitle("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Add Expense</button>
    </form>
  );
}
