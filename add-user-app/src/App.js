import React from "react";
import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/Users/UserList";
import Modal from "./components/Modal/Modal";

const DUMMY_DATA = [
  {
    id: "u1",
    userName: "Susuan",
    age: "64",
  },
  { id: "u2", userName: "Elias", age: "35" },
  { id: "u3", userName: "Jenae", age: "40" },
];

function App(props) {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [isValid, setIsValid] = useState(true);
  const [errorMsgName, setErrorMsgName] = useState("");
  const [errorMsgAge, setErrorMsgAge] = useState("");

  const addUserHandler = (newUser) => {
    if (newUser.age === 0 || newUser.userName === "") {
      if (newUser.age === 0) {
        setErrorMsgAge("Please enter a valid age (> 0 and < 100)");
      }

      if (newUser.userName === "") {
        setErrorMsgName("Please enter a valid name");
      }

      setIsValid(false);
      return;
    } else {
      setErrorMsgName("");
      setErrorMsgAge("");

      setUsers((prevUsers) => {
        return [newUser, ...prevUsers];
      });
    }
  };

  const setOKHandler = (val) => {
    setIsValid(val);
    setErrorMsgName("");
    setErrorMsgAge("");
  };

  return (
    <div className="App">
      <Form onSaveUserData={addUserHandler} />
      <UserList userData={users} />
      <Modal
        isValid={isValid}
        errorName={errorMsgName}
        errorAge={errorMsgAge}
        onSetOk={setOKHandler}
      />
    </div>
  );
}

export default App;
