import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // you can either use a wrapping element to return just one item to react
    // this can lead to lots of extra divs all over the place
    // <div>
    //   {error && (
    //     <ErrorModal
    //       title={error.title}
    //       message={error.message}
    //       onConfirm={errorHandler}
    //     />
    //   )}
    //   <Card className={classes.input}>
    //     <form onSubmit={addUserHandler}>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         id="username"
    //         type="text"
    //         value={enteredUsername}
    //         onChange={usernameChangeHandler}
    //       />
    //       <label htmlFor="age">Age (Years)</label>
    //       <input
    //         id="age"
    //         type="number"
    //         value={enteredAge}
    //         onChange={ageChangeHandler}
    //       />
    //       <Button type="submit">Add User</Button>
    //     </form>
    //   </Card>
    // </div>

    // or return an array to wrap more than one element, but in that case you need ot add keys to each elemtn in the array
    // [
    //   error && (
    //     <ErrorModal
    //       key="error-modal"
    //       title={error.title}
    //       message={error.message}
    //       onConfirm={errorHandler}
    //     />
    //   ),
    //   <Card key="imput-card" className={classes.input}>
    //     <form onSubmit={addUserHandler}>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         id="username"
    //         type="text"
    //         value={enteredUsername}
    //         onChange={usernameChangeHandler}
    //       />
    //       <label htmlFor="age">Age (Years)</label>
    //       <input
    //         id="age"
    //         type="number"
    //         value={enteredAge}
    //         onChange={ageChangeHandler}
    //       />
    //       <Button type="submit">Add User</Button>
    //     </form>
    //   </Card>,
    // ]

    // use a wrapper helper component to prevent unnecessary html markup
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
