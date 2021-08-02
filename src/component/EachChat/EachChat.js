import React from "react";
import moment from "moment";
import classes from "./EachChat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faUser } from "@fortawesome/free-solid-svg-icons";

function EachChat(props) {
  const checkBot = props.chatTypeId == 0 ? true : false;
  return (
    <div className={checkBot ? classes.libot : classes.liUser}>
      {checkBot ? (
        <FontAwesomeIcon className={classes.faIconSize} icon={faLaptop} />
      ) : (
        <FontAwesomeIcon className={classes.faIconSize} icon={faUser} />
      )}
      <div className={classes.fromId}>from: {props.userID}</div>
      <div className={classes.label}>{props.msg}</div>
      <div className={classes.date}>
        <label>{moment(props.time).format("MMM Do YY, h:mm a")}</label>
      </div>
    </div>
  );
}

export default EachChat;
