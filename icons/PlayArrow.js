import * as React from "react";

function PlayArrow(props) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const MemoPlayArrow = React.memo(PlayArrow);
export default MemoPlayArrow;
