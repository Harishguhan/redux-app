import React from "react";

function LoginForm() {
  return (
    <div className="">
      <div className="row">
        <div className="col-lg-6">
          <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="enter the username"
              name="name"
              data-testid="username"
            />
            <label>Email</label>
            <input 
              type='email'
              placeholder="Enter the Your email"
              name="email"
              data-testid="email"
            />
             <label>MobileNumber</label>
            <input 
              type='text'
              placeholder="Enter the Your MobileNumber"
              name="mobilenumber"
              data-testid="mobilenumber"
            />
             <label>CityName</label>
            <input 
              type='text'
              placeholder="Enter the Your CityName"
              name="cityname"
              data-testid="cityname"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
