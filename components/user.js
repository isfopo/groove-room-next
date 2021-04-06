import React, { useState, useEffect } from "react";

export const User = (props) => {
  const { user, room } = props;
  const [messages, setMessages] = useState();

  useEffect(async () => {
    const res = await fetch(
      `http://localhost:3000/api/message?user=${user.id}&room=${room.id}`
    );
    setMessages(await res.json());
  }, [room]);
  // TODO: if avatar is null, show default avatar
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar} />
      {messages?.map((message, key) => (
        <p key={key}>{message.content}</p>
      ))}
    </div>
  );
};
