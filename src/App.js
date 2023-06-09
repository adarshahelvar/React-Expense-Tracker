import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    {
      id: "01",
      title: "Car Insurance",
      amount: 296.15,
      date: new Date(2013, 3, 15),
    },
    {
      id: "02",
      title: "Bike Insurance",
      amount: 126.15,
      date: new Date(2023, 6, 12),
    },
    {
      id: "03",
      title: "Life Insurance",
      amount: 4256.15,
      date: new Date(2023, 9, 7),
    },
    {
      id: "04",
      title: "Health Insurance",
      amount: 1221.15,
      date: new Date(2023, 11, 18),
    },
  ];

  return (
    <div>
      <NewExpense />
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;

