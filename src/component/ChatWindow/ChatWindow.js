import React, { useState } from "react";
import Chat from "../Chat/Chat";
import ChatLists from "../ChatLists/ChatLists";
import classes from "./ChatWindow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

let chatArray = [
  {
    id: 12,
    msg: "Hi",
    timeStamp: new Date(),
    chatTypeId: 0
  },{
    id: 23,
    msg: "Hello",
    timeStamp: new Date(),
    chatTypeId: 1
  }
];

function ChatWindow() {
  const [chatList, setChatList] = useState(chatArray);
  const onUpdateMsgList = (newMsg) => {
    setChatList((prevState) => {
      return [...prevState, newMsg];
    });
  };
  return (
    <div className={classes.chatWindow}>
      <label className={classes.label}>
        <FontAwesomeIcon className={classes.icon} icon={faComment} /> Chat Window
      </label>
      {chatList.length ? (
        <ChatLists allChat={chatList} />
      ) : (
        <h3 className={classes.h3}> **No Msg please start new chat</h3>
      )}

      <Chat onUpdateMsgList={onUpdateMsgList} />
    </div>
  );
}

export default ChatWindow;
