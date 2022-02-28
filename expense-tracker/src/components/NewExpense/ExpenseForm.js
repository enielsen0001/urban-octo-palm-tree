import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  // const [userIntput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // you can either keep individual state slices liek this, or combine them as below
  const currentDate = () => {
    const d = new Date();
    // return "2022-02-26";
    const year = d.getFullYear().toString();
    const month =
      (d.getMonth() + 1).toString().length > 1
        ? (d.getMonth() + 1).toString()
        : "0" + (d.getMonth() + 1).toString();

    const day =
      d.getDate().toString().length > 1
        ? d.getDate().toString()
        : "0" + d.getDate().toString();

    return year + "-" + month + "-" + day;
  };
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(currentDate());
  const [enteredType, setEnteredType] = useState("Uncategorized");

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

  const enteredTypeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const submitHandler = (event) => {
    // on submit will automatically refresh page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      // enforce number conversion on ammount so it isn't a string
      amount: +enteredAmount,
      date: new Date(enteredDate),
      type: enteredType,
    };

    // this funciton was passed through props from NewExpense
    props.onSaveExpenseData(expenseData);

    // reset form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredType("Uncategorized");

    props.onCancel();
  };

  return (
    <form id="expenseForm" onSubmit={submitHandler}>
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

        <div className="new-expense__control">
          <label>Expense Type</label>
          <select onChange={enteredTypeHandler}>
            <option value="Uncategorized">Uncategorized</option>
            <option value="Groceries / Household">Groceries / Household</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Bills / Utilities">Bills / Utilities</option>
            <option value="Entertainment / Misc">Entertainment / Misc</option>
            <option value="Dining Out">Dining Out</option>
            <option value="Gifts">Gifts</option>
            <option value="School / Childcare">School / Childcare</option>
            <option value="Medical">Medical</option>
            <option value="Debt / CC">Debt / CC</option>
            <option value="Money In">Money In</option>
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        {/* event for button gets added to form not button */}
        <button type="button" onClick={props.onCancel}>
          Clear
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
