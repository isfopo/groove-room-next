import React from "react";

import Add from "../public/icons/Add";
import Join from "../public/icons/Group";
import List from "../public/icons/List";

export const LeftSidebar = (props) => {
  const { rooms, handleSetRoom } = props;
  console.log(rooms);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <p>left sidebar</p>
      {rooms.map((room) => {
        return <p onClick={() => handleSetRoom(room)}>{room.name}</p>;
      })}
      <Add onClick={() => handleClick()} />
      <Join onClick={() => handleClick()} />
      <List />
    </div>
  );
};
