import React, { useState, useEffect } from "react";

import { LeftSidebar } from "./leftSidebar";

export const Home = (props) => {
  const { session } = props;
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});

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

    setUser(json);
  }, []);

  const handleSetRoom = async (newRoom) => {
    const res = await fetch(`http://localhost:3000/api/room/${newRoom.id}`);
    const json = await res.json();

    setRoom(json);
  };

  return (
    <div>
      <LeftSidebar rooms={user.rooms} handleSetRoom={handleSetRoom} />
      {room && // TODO: make this a component for user display
        room.users.map((user, key) => (
          <div key={key}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <img src={user.avatar} />
          </div>
        ))}
    </div>
  );
};
