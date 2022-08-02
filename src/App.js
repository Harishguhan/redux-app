import React from "react";
import Viewdata from "./components/Viewdata";
import Addata from "./components/Addata";
import { Route, Router, Routes } from "react-router-dom";
import EditData from "./components/EditData";
import Home from "./Chat-App/Home";
import ChatBox from "./Chat-App/ChatBox";
import Navbar from "./Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:roomid" element={<ChatBox />} />
        <Route path="/add" element={<Addata />} />
        <Route path="/view" element={<Viewdata />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
