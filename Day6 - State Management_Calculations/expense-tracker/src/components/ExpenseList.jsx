import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) return <p>No expenses added yet.</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </div>
  );
}
