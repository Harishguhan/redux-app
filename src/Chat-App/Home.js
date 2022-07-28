import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [roomid, setRoomid] = useState("");
  const change = (e) => {
    setRoomid(e.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <input
            type="text"
            placeholder="Type Your Id"
            onChange={(e) => change(e)}
          />
          <Link to={`/${roomid}`}>Join Room</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
