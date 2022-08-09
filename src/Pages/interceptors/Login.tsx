import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>User Login</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary mt-3">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
