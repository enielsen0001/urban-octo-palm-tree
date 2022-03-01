import React from "react";
import { useState } from "react";

import Card from "../UI/Card";
import "./Form.scss";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      userName: username,
      age: +userAge,
      id: Math.floor(Math.random() * 9999999999),
    };

    props.onSaveUserData(userData);

    // preser form inputs after error
    if (username.length !== 0 && userAge.length !== 0) {
      setUsername("");
      setUserAge("");
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Username</label>
          <input onChange={usernameHandler} type="text" value={username} />
        </p>

        <p>
          <label>Age (years)</label>
          <input
            onChange={userAgeHandler}
            type="number"
            min="1"
            max="99"
            value={userAge}
          />
        </p>

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default Form;
