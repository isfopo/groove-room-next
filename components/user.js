import React, { useState, useEffect } from "react";
import Image from "next/image";

export const User = (props) => {
  const { user, room } = props;
  const [messages, setMessages] = useState();

  useEffect(async () => {
    const res = await fetch(
      `http://localhost:3000/api/message?user=${user.id}&room=${room.id}`
    );
    setMessages(await res.json());
  }, [room]);

  return (
    <div>
      <h1>{user.name}</h1>
      <Image
        src={user.avatar ? user.avatar : "/images/default-profile.png"}
        width={500}
        height={500}
      />
      {messages?.map((message, key) => (
        <p key={key}>{message.content}</p>
      ))}
    </div>
  );
};
