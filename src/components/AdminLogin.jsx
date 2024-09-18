import React, { useEffect, useState } from 'react'
import adminLoginImage from '../images/adminLoginImage.png'
import '../index.css'
import { Link } from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword] = useState("")
  const [list,setList]=useState(null)
  const [loggedIn,setLoggedIn]=useState(false) // true: login success otherwise failure
  const navigate=useNavigate()

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
  const handleSubmit = async (e)=> {
  
  e.preventDefault()
  var adminLogin = {
    email: email,
    password: password
  }
  
  var path=`https://crm-backend-d23x.onrender.com/api/v1/users/login`
  //console.log(path)
  await Axios.post(path,{email,password},{withCredentials:true}) 
   .then((res)=>{

    console.log(" success response :",res.data)                                
     setList(res.data)
    }).catch((err)=>{
     console.log("Failed to login",err.data)
      setList(err.data)
    })
  }
    // console.log("test")
  useEffect(()=>{
    if(loggedIn===true)
    {      
      navigate("/sidebar")
      return
    }
  }) 
  if(loggedIn===true)
  {
    return
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
    <h3> {list!==null && list.message==="Login successful" && setLoggedIn(true) }</h3>
        </div>
    
    </div>
  )
}

export default AdminLogin

