import React from "react";
import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/Users/UserList";

const DUMMY_DATA = [
  {
    id: "u1",
    userName: "Susuan",
    age: "64",
  },
  { id: "u2", userName: "Elias", age: "35" },
  { id: "u3", userName: "Jenae", age: "40" },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      console.log(newUser);

      // need ot get new user form form, name isn't working
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <Form onSaveUserData={addUserHandler} />
      <UserList userData={users} />
    </div>
  );
}

export default App;
