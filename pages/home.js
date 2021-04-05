import React from "react";

export const Home = (props) => {
  const { session } = props;
  const { user } = session;

  return <div>{user.name}</div>;
};
