import React from "react";

function LoginForm() {
  return (
    <div className=''>
      <div className="row">
        <div className="col-lg-6">
          <form>
            <label>Name</label>
            <input type="text" placeholder="enter the user name" name="name" data-testid="username" />
          </form>
        </div>
      </div>
    </div>
  
  );
}

export default LoginForm;
