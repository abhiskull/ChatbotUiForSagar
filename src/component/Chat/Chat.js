import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import classes from "./Chat.module.css";

function Chat(props) {
  const [msg, setMsg] = useState("");
  const inputMsgHandler = (event) => {
    setMsg(event.target.value);
  };
  const addMsgToList = (event) => {
    event.preventDefault();
    const msgObj = {
      id: Math.random(),
      msg: msg,
      timeStamp: new Date(),
      chatTypeId: 0
    };
    props.onUpdateMsgList(msgObj);
  };
  return (
    <div>
      <div className={classes.input}>
        <form onSubmit={addMsgToList}>
          <input type="text" value={msg} onChange={inputMsgHandler} />
          <button className={classes.button} type="submit">
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
