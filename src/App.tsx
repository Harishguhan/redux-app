import React from "react";
import { Route, Routes } from "react-router-dom";
import Viewdata from "./Pages/Viewcontact/Viewdata";
import EditData from "./Pages/Editcontact/EditData";
import Counter from "./Pages/Counter/Counter";
import Addata from "./Pages/AddContact/Addata";
import Register from "./Pages/interceptors/Register/Register";
import LoginForm from "./components/Loginform/LoginForm";
import Login from "./Pages/interceptors/Login/Login";
import Dashboard from "./Pages/interceptors/dashboard/Dashboard";
import CustomComponent from "./components/CustomComponent";
import Home from "./Pages/Sidenavbar/Home";
import About from "./Pages/Sidenavbar/About";
import Contact from "./Pages/Sidenavbar/Contact";
import Namedetails from "./Pages/Sidenavbar/Namedetails";
import Bankdetails from "./Pages/Sidenavbar/Bankdetails";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<Addata />} />
        <Route path="/view" element={<Viewdata />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/custom" element={<CustomComponent />} />
        <Route path="/name" element={<Namedetails />} />
        <Route path="/bank" element={<Bankdetails />} />
      </Routes>
    </div>
  );
}

export default App;
