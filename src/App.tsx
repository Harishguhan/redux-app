import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Viewdata from "./Pages/Viewcontact/Viewdata";
import EditData from "./Pages/Editcontact/EditData";
import Counter from "./Pages/Counter/Counter";
import LoginForm from "./components/LoginForm";
import Addata from "./Pages/AddContact/Addata";


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
