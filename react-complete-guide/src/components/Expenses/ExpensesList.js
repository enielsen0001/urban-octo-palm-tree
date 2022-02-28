import React from "react";

import "./ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // set content

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else if (props.items.length > 0)
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            type={expense.type}
          />
        ))}
      </ul>
    );
};

export default ExpensesList;
