import React from "react";
import Viewdata from "./components/Viewdata";
import Addata from "./components/Addata";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EditData from "./components/EditData";
import Home from "./Chat-App/Home";
import ChatBox from "./Chat-App/ChatBox";
import Navbar from "./Navbar";
import Counter from "./components/Counter";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:roomid" element={<ChatBox />} />
        <Route path="/add" element={<Addata />} />
        <Route path="/view" element={<Viewdata />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
