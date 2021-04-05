import React from "react";
import styles from "../styles/Sidebar.module.css";

import Add from "../public/icons/Add";
import Join from "../public/icons/Group";
import List from "../public/icons/List";

export const LeftSidebar = (props) => {
  const { rooms, handleSetRoom } = props;

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className={styles.sidebarLeft}>
      <div className={styles.list}>
        {rooms &&
          rooms.map((room, key) => {
            return (
              <p key={key} onClick={() => handleSetRoom(room)}>
                {room.name}
              </p>
            );
          })}
      </div>
      <Add onClick={() => handleClick()} />
      <Join onClick={() => handleClick()} />
      <List className={styles.handleLeft} />
    </div>
  );
};
