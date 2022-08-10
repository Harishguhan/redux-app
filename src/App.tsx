import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Viewdata from "./Pages/Viewcontact/Viewdata";
import EditData from "./Pages/Editcontact/EditData";
import Counter from "./Pages/Counter/Counter";
import Addata from "./Pages/AddContact/Addata";
import Register from "./Pages/interceptors/Register/Register";
import Login from "./Pages/interceptors/Login/Login";
import LoginForm from "./components/Loginform/LoginForm";


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
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
