import React, { useState } from "react";
import customURL from "../../../Axios";
import './Login.css';
import { useNavigate } from "react-router-dom";
const Login = () => {

  const names:string = '';
  const passwords:string = '';
  // console.log(initial)
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [password,setpassword] = useState('');


const handlesubmit = (e:React.FormEvent) =>{
  e.preventDefault();
  if(name && password ){
    setname(names);
    setpassword(passwords);
    customURL
      .post('/auth/login',{email:name})
      .then((responce) => {
        console.log('responce.data',responce)
        if(responce?.data?.status === 'success'){
          localStorage.setItem('access_token', responce.data.token);
            localStorage.setItem('refresh_token', responce.data.refreshToken);
            navigate('/home');
        } else{
          alert('Login Failed');
        }
      })
      .catch((err) => console.error(err.message));
  }
}

  return (
    <div className="container-fluid login-background">
      <div className="row login-content">
        <h1 className="">Login</h1>
        <form onSubmit={handlesubmit}>
          <div className="form-group groups">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Name"
              name="name"
              className="inputs-field"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group groups">
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="inputs-field"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button className="log-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
