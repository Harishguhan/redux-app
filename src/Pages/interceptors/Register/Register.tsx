import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import customAxios from "../../../Axios/index";
interface Register {
  name?: string;
  email?: string;
  password?: string;
  cityname?: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState<Register>({});
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let { name, email, password, cityname } = user;
    console.log(user)
    customAxios
      .post("/auth/signup", { email, password })
      .then((responce) => {
        if (responce.status === 201) {
          alert("User Registered Succesfully");
          navigate('/login')
        } else {
          alert("Failed To register User");
        }
      })
      .catch((error) => console.error(error.message));
  }
  return (
    <div className="container-fluid box">
      <div className="boxx">
      <div className="row">
        <div className="col-lg-6  rounded text-white defal" >
          <h1>information</h1>
          <p>React lets you define components as classes or functions. Components
            defined as classes currently provide more features which are
            described in detail on this page</p>
            <p>React lets you define components as classes or functions. Components
            defined as classes currently provide more features which are
            described in detail on this page</p>
            <button className="account">Have an Account</button>
        </div>
        <div className="col-lg-6  bg-white rounded register">
          <h1>Register form</h1>
          <form onSubmit={handlesubmit}>
            <div className="form-group groupss">
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="input-field"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="form-group groupss">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input-field"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="form-group groupss">
              <label>Password</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Password"
                name="password"
                className="input-field"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="form-group groupss">
              <label>cityname</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your cityname"
                name="cityname"
                className="input-field"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <button className="btn1">Register</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
