import React from "react";
import Viewdata from './components/Viewdata'
import Addata from "./components/Addata";
import { Route, Routes } from "react-router-dom";
import EditData from "./components/EditData";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/add" element={<Addata />} />
        <Route path="/" element={<Viewdata />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </div>
  );
}

export default App;
