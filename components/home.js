import React, { useState, useEffect } from "react";

import { LeftSidebar } from "./leftSidebar";
import { User } from "./user";

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

    setUser(await res.json());
  }, []);

  const handleSetRoom = async (newRoom) => {
    const res = await fetch(`http://localhost:3000/api/room/${newRoom.id}`);
    setRoom(await res.json());
  };

  return (
    <div>
      <LeftSidebar rooms={user.rooms} handleSetRoom={handleSetRoom} />

      {room.users?.map((user, key) => (
        <User user={user} room={room} key={key} />
      ))}
    </div>
  );
};
