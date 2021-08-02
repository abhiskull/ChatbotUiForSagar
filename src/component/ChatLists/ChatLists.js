import React from "react";
import EachChat from "../EachChat/EachChat";

function ChatLists(props) {
  return (
    <div>
      {props.allChat.map((eachChat) => {
        return (
          <div>
            <EachChat
              key={eachChat.id}
              userID={eachChat.id}
              msg={eachChat.msg}
              time={eachChat.timeStamp}
              chatTypeId={eachChat.chatTypeId}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ChatLists;
