import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "01",
      title: "Car Insurance",
      amount: 296.15,
      date: new Date(20 , 3 , 2023),
    },
    {
      id: "02",
      title: "Bike Insurance",
      amount: 126.15,
      date: new Date(18 , 6 , 2023),
    },
    {
      id: "03",
      title: "Life Insurance",
      amount: 4256.15,
      date: new Date(7 , 9 , 2023),
    },
    {
      id: "04",
      title: "Health Insurance",
      amount: 1221.15,
      date: new Date(29 , 12 , 2023),
    },
  ];

  return (
    <div>
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
