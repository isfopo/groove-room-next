import React, { useState, useEffect } from "react";

import { LeftSidebar } from "./leftSidebar";

export const Home = (props) => {
  const { session } = props;
  const [user, setUser] = useState({});

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/user", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        ...session.user,
      }),
    });
    const json = await res.json();
    console.log(json);
    setUser(json);
  }, []);

  return (
    <div>
      <LeftSidebar rooms={user.rooms} />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.avatar} />
    </div>
  );
};
