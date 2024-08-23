import React, { useState } from 'react'
import adminLoginImage from '../images/adminLoginImage.png'
import '../index.css'
import { Link } from 'react-router-dom'
import Axios from "axios"

const AdminLogin = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword] = useState("")
  const [list,setList]=useState(null)

  const setEmailFun = (event)=> {
    setEmail(event.target.value)
  }
  const setPasswordFun = (event)=> {
    setPassword(event.target.value)
  }
  const clearFun = ()=> {
    setEmail("")
    setPassword("")
  }
  const handleSubmit = (e)=> {
  
  e.preventDefault()
  var adminLogin = {
    email: email,
    password: password
  }
  Axios.get("http://localhost:3001/api/v1/users/admin/users/",{id:"66acfbd95a7074081fd2c22a"}) 
   .then((res)=>{

    console.log("Login successful",res.data)                                
     setList(res.data)
    }).catch((err)=>{
     console.log("Failed to login",err.data)
      setList(err.data)
    })
  console.log("test")
  }
  return (
    <div id="adminMainDiv">
      <div id="adminImg"> 
    <img src={adminLoginImage} alt=""></img>
      </div>
      <div id="adminLoginForm">
        <h2>ADMIN LOGIN</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" id="textBox1" value  = {email} onChange={(e)=>setEmailFun(e)} placeholder='Enter Email Id'/>
        <input type="password" id="textBox2" value = {password} onChange={(e)=>setPasswordFun(e)} placeholder='Enter Password'/>
        <input type="submit" id="btn1" value="Login" ></input>
        <input type="reset" id="btn2" value="clear" onClick={clearFun}></input>
      
       
        <Link to ='/' id = "btn3">   Back   </Link>
        </form>
      </div>
      <div>
    <h4><font color="green">{list!==null && list.message}</font></h4>
       
        </div>
    
    </div>
  )
}

export default AdminLogin