import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeaderListItems(props) {
  return (
    <div className="header-list-item active">
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </div>
  );
}
