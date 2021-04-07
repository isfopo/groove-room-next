import React, { useState, useEffect } from "react";
import Image from "next/image";

export const User = (props) => {
  const { user, room, canType } = props;
  const [messages, setMessages] = useState();
  const [readyToType, setReadyToType] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  useEffect(async () => {
    const res = await fetch(
      `http://localhost:3000/api/message?user=${user.id}&room=${room.id}`
    );
    setMessages(await res.json());
  }, [room]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/message", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        room: room.id,
        content: newMessage,
      }),
    });

    setNewMessage("");
    setReadyToType(false);
  };

  return (
    <div
      onMouseEnter={() => setReadyToType(true)}
      onMouseLeave={() => setReadyToType(false)}
    >
      <h1>{user.name}</h1>
      <Image
        src={user.avatar ? user.avatar : "/images/default-profile.png"}
        width={500}
        height={500}
      />
      <div>
        {canType && readyToType ? (
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              value={newMessage}
              placeholder="Type a message..."
              onChange={(e) => {
                if (e.target.value) {
                  setNewMessage(e.target.value);
                } else {
                  setNewMessage(e.target.value);
                  setReadyToType(false);
                }
              }}
            />
          </form>
        ) : (
          messages?.map((message, key) => <p key={key}>{message.content}</p>)
        )}
      </div>
    </div>
  );
};
