import React from "react";

import "./User.scss";

const User = (props) => {
  return (
    <li className="user-item">
      {props.name} ({props.age} years old)
    </li>
  );
};

export default User;
