import ExpenseList from "../components/ExpenseList";

export default function Home({ expenses }) {
  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div>
      <h2>Expense Tracker</h2>
      <h3>Total: ${total}</h3>
      <ExpenseList expenses={expenses} />
    </div>
  );
}
