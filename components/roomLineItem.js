import React, { useState } from "react";

import More from "../icons/MoreVertical";

export const RoomLineItem = (props) => {
  const { room, active, handleSetCurrentRoom } = props;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      onClick={() => handleSetCurrentRoom(room)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <p>{room.name}</p>
      {active && <More onMouseEnter={() => setShowMenu(true)} />}
      {showMenu && (
        <div>
          <p>Invite</p>
          <br />
          <p>Rename</p>
          <br />
          <p>Leave</p>
        </div>
      )}
    </div>
  );
};
