import React from "react";
import Viewdata from './components/Viewdata'
import Addata from "./components/Addata";
import { Route, Routes } from "react-router-dom";
import EditData from "./components/EditData";
import Home from "./Chat-App/Home";
import ChatBox from "./Chat-App/ChatBox";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:roomid" element={<ChatBox />} />
        <Route path="/add" element={<Addata />} />
        <Route path="/view" element={<Viewdata />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </div>
  );
}

export default App;
