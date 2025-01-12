// input -> liked: true/false
// output -> raise onClick event and toggle the liked

// <i className="bi bi-heart"></i>
// <i className="bi bi-heart-fill"></i>

import React from "react";

const Like = props => {
  let classes = "text-danger bi bi-heart";
  if (props.liked) classes += "-fill";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
}

export default Like
