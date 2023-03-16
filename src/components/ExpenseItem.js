import { useState } from "react";
import "./expenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  console.log(props.date);
  // { props.date.toISOString().slice(0,10)}
  const [title, setTitle ] = useState(props.title);
  const [price, setPrice] = useState(props.amount)
  
  const clickHandler = ()=>{
    setTitle("Food")
  }

  const priceHandler = ()=>{
    setPrice(100);
  }

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>${price}</div>
    </div>
    <button onClick={clickHandler} >Change Title</button>
    <button onClick={priceHandler}>Change Price</button>
  </Card>
  );
};

export default ExpenseItem;
