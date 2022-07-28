import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useChat from "./useChat";

const ChatBox = () => {
  const { roomid } = useParams();
  console.log(roomid);
  const { msg, sendmsg } = useChat(roomid);
  const [newmsg, setnewmsg] = useState("");
  const change = (e) => {
    setnewmsg(e.target.value);
  };
  const handlesendmsg = () => {
    sendmsg(newmsg);
    setnewmsg("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>Chat Id:{roomid}</h1>
          {msg.map((map, i) => (
            <li key={i}>{msg.body}</li>
          ))}
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => change(e)}
          />
          <button onClick={handlesendmsg}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
