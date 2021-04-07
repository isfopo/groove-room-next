import React from "react";
import styles from "../styles/Sidebar.module.css";

import { RoomLineItem } from "./roomLineItem";

import Add from "../icons/Add";
import Join from "../icons/Group";
import List from "../icons/List";

export const LeftSidebar = (props) => {
  const { rooms, currentRoom, handleSetCurrentRoom } = props;

  const handleAdd = () => {
    console.log("add");
  };

  const handleJoin = () => {
    console.log("click");
  };

  return (
    <div className={styles.sidebarLeft}>
      <div className={styles.list}>
        {rooms &&
          rooms.map((room, key) => {
            return (
              <RoomLineItem
                key={key}
                room={room}
                active={room.id === currentRoom.id}
                handleSetCurrentRoom={handleSetCurrentRoom}
              />
            );
          })}
      </div>
      <Add onClick={() => handleAdd()} />
      <Join onClick={() => handleJoin()} />
      <List className={styles.handleLeft} />
    </div>
  );
};
