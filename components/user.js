import React from "react";

export const User = (props) => {
  const { user } = props;

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar} />
    </div>
  );
};
