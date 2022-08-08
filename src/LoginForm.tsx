import React,{useState} from "react";

type AuthUser ={
  name:string,
  email:string,
  mobilenumber:string,
  cityname:string
 }
let initial = {
  name:'',
  email:'',
  mobilenumber:'',
  cityname:''
}

function LoginForm() {
    const [input,setInput] = useState<AuthUser>(initial);
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setInput({...input,[e.target.name]:e.target.value});
    }
    const handleclick = () =>{
        setInput(initial);
    }
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
              onChange={handlechange}
              value = {input.name}
            /><br />
            <label>Email</label>
            <input
              type='email'
              placeholder="Enter the Your email"
              name="email"
              data-testid="email"
              onChange={handlechange}
              value = {input.email}
            /><br />
             <label>MobileNumber</label>
            <input
              type='text'
              placeholder="Enter the Your MobileNumber"
              name="mobilenumber"
              data-testid="mobilenumber"
              onChange={handlechange}
              value = {input.mobilenumber}
            /><br />
             <label>CityName</label>
            <input
              type='text'
              placeholder="Enter the Your CityName"
              name="cityname"
              onChange={handlechange}
              value = {input.cityname}
              data-testid="cityname"
            /><br />
            <button type="button" data-testid="btn" onClick={handleclick}>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;