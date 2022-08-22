import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import customAxios from '../../../Axios';


const Dashboard = () => {
  const navigate = useNavigate();
  const [data,setdata] = useState([]);

const logout = () =>{
  localStorage.clear();
  navigate('/login')
}
const getdata = () =>{
    customAxios
    .get('/auth/employees')
    .then((responce) =>{
      setdata(responce?.data?.data?.employees)
    })
    .catch((err) => console.error(err.message))
  }
  useEffect(() => console.log('data',data),[data])
  return (
    <div>
        <h1>Welcome To Dashboard</h1>
        <button onClick={getdata} className="btn btn-info mt-5">Get Data</button>
        {data?.map((datas:any,index) => {
          return <div id={index.toString()}>{datas.ename}</div>
        })}

        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard