import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ChatApp.css'
const Home = () => {
  const [roomId, setRoomid] = useState("");
  const change = (e) => {
    setRoomid(e.target.value);
  };
  return (
    <div className="container home">
      <div className="row">
        <div className="col-lg-12 home-card">
          <input
            className="home-input"
            type="text"
            placeholder="Type Your Id"
            onChange={(e) => change(e)}
          />
          <Link className="btn home-button" to={`/${roomId}`}>Lets Chat</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
