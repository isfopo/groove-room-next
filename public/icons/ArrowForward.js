import * as React from "react";

function ArrowForward(props) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
    </svg>
  );
}

const MemoArrowForward = React.memo(ArrowForward);
export default MemoArrowForward;
