import React from "react";

export default function Nav_List_Items({ name, onMouseEnter, OC }) {
  return (
    <a className="d_item" href="#" onMouseEnter={onMouseEnter}>
      {OC !== undefined ? <i className={"fa fa-" + OC}></i> : null} {name}
    </a>
  );
}
