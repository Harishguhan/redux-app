import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Viewdata from "./Pages/Viewcontact/Viewdata";
import EditData from "./Pages/Editcontact/EditData";
import Counter from "./Pages/Counter/Counter";
import Addata from "./Pages/AddContact/Addata";
import Register from "./Pages/interceptors/Register/Register";
import LoginForm from "./components/Loginform/LoginForm";
import Login from "./Pages/interceptors/Login/Login";
import Dashboard from "./Pages/interceptors/dashboard/Dashboard";
import CustomComponent from "./components/CustomComponent";


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
        <Route path="/signup" element={ <Register /> } />
        <Route path="/login" element = {<Login />} />
        <Route path="/dashboard" element = { <Dashboard /> } />
        <Route path="/custom" element = { <CustomComponent /> } />
      </Routes>
    </div>
  );
}

export default App;
