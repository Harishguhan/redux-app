import React, { useState } from "react";
import customURL from "../../../Axios";
import './Login.css';
import { useNavigate } from "react-router-dom";
const Login = () => {

  interface keyValue{
    key:string,
    value:string,
  }

  interface logintype{
    username:string,
    password:string,
  }

  const initialvalue:logintype = {
    username:'',
    password:'',
  };


  const [loginuser,setloginuser] = useState<logintype>(initialvalue);

  const navigate = useNavigate();

  const handlechange = (prop:keyValue) =>{
    let finalvalue:logintype = {...loginuser }

    if (prop.key === 'username') finalvalue.username = prop.value
    else if(prop.key === 'password') finalvalue.password = prop.value
    setloginuser(finalvalue)
  }

const handlesubmit = (e:React.FormEvent) =>{
  e.preventDefault();

  let { username,password } = loginuser;
  if (username && password){
    setloginuser(initialvalue)
  
    customURL
      .post('/auth/login',{email:username})
      .then((responce) => {
        console.log('responce.data',responce)
        if(responce?.data?.status === 'Success'){
          localStorage.setItem('access_token', responce.data.token);
            localStorage.setItem('refresh_token', responce.data.refreshToken);
            navigate('/dashboard');
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
              placeholder="Enter Your Email"
              name="name"
              className="inputs-field"
              onChange={(e) => handlechange({key:'username',value:e.target.value})}
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
              onChange={(e) => handlechange({key:'password',value:e.target.value})}
            />
          </div>
          <button className="log-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
