export default function ExpenseItem({ expense }) {
  return (
    <div style={{ padding: "10px", background: "#84a59d", borderRadius: "10px", color: "white" }}>
      <h4>{expense.title}</h4>
      <p>Amount: ${expense.amount}</p>
      <p>Category: {expense.category}</p>
    </div>
  );
}
