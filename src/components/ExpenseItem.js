import React from "react";
import "./expenseItems.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  console.log(props);
  // { props.date.toISOString().slice(0,10)}

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
