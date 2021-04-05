import React from "react";

export const Home = (props) => {
  const { session } = props;
  const { user } = session;
  console.log(user);
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.picture} />
    </div>
  );
};
