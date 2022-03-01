import React from "react";

import "./UserList.scss";
import User from "./User";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className="user-list-wrap">
      <ul className="user-list">
        {props.userData.map((user) => (
          <User key={user.id} name={user.userName} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
