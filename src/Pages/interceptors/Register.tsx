import React, { useState } from "react";

const Register = () => {
  const [user, setuser] = useState({});
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <form>
            <div className="form-group">
            <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="form-control"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="form-control"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                placeholder="Enter Your Password"
                name="password"
                className="form-control"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="form-group">
              <label>cityname</label>
              <input
                type="text"
                placeholder="Enter Your cityname"
                name="cityname"
                className="form-control"
                onChange={(e) => handlechange(e)}
              />
            </div>
            <button className="btn btn-primary mt-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
