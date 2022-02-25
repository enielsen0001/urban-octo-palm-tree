import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // keep mioving data up to parents
    // calling function as a value added in app,js
    props.onAddExpense(expenseData);
    setIsEditing(false);

    console.log(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const content = isEditing ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>add new expense</button>
  );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
