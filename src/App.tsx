import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Addata from "./components/Addata";
import Viewdata from "./components/Viewdata";
import EditData from "./components/EditData";
import Counter from "./components/Counter";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/add" element={<Addata />} />
        <Route path="/view" element={<Viewdata />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
