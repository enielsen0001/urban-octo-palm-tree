import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  // const [userIntput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // you can either keep individual state slices liek this, or combine them as below
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // if you try to assign just the new info, it will erase the other two items form the useState,
    // so we use a spreader here to copy the use state and reassign over the default with the new value
    // for user input
    // setUserInput({
    //   ...userIntput,
    //   enteredTitle: event.target.value,
    // });
    // 2 reasons to use the following
    // 1.  if you are going to need to know the prev state to
    // compare to
    // 2. to make sure you are getting the most recent state to
    // work with and don't run in to error bc react queues up changes
    // !!!
    // if your state update depends on the previous state
    // make sure you use this format with the function
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // on submit will automatically refresh page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // this funciton was passed through props from NewExpense
    props.onSaveExpenseData(expenseData);

    // reset form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* event for button gets added to form not button */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
