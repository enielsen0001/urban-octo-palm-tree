import React from "react";
import { useState } from "react";

import "./Expenses.scss";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  // const [yearFilter, setYearFilter] = useState(new Date().getFullYear());
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("in Expenses.js: " + selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "all") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />>
      </Card>
    </div>
  );
};

export default Expenses;
