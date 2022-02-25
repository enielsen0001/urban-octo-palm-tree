import "./Expenses.scss";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("");

  const expenseList = props.items.map(function (expenseItem, i) {
    return (
      <ExpenseItem
        key={i}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    );
  });

  const filterYearHandler = (selectedYear) => {
    setYearFilter(selectedYear);
    console.log("in Expenses.js: " + selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={filterYearHandler}
          selected={yearFilter}
        />
        {expenseList}
      </Card>
    </div>
  );
}

export default Expenses;
