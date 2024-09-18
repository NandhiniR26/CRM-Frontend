import React, { useEffect } from 'react'
import '../index.css'
import userLoginImage from '../images/userLoginImage.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Axios  from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [list,setList]=useState(null)
  const [loggedIn,setLoggedIn]=useState(false) // true: login success otherwise failure
  const navigate=useNavigate()

  const handleFun=(event)=>{
    if(event.target.id==="textBox11")
      setEmail(event.target.value)
    if (event.target.id==="textBox22")
     setPassword(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    var userObj={
      email:email,
      password:password
}

    Axios.post("https://crm-backend-d23x.onrender.com/api/v1/users/login",userObj) .then((res)=>{
      console.log("login success",res.data)                                          
       setList(res.data)
     }).catch((err)=>{
      console.log("Failed to login",err.data)
      setList(err.data)
     })
   }
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
    <div id="userMainDiv">
      <div id="userImg"> 
    <img src={userLoginImage} alt=""></img>
      </div>
      <div id="userLoginForm">
        <h2>USER LOGIN</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" id="textBox11" value={email} onChange={(e)=>handleFun(e)} placeholder='Enter Email Id'/>
        <input type="password" id="textBox22"  value={password} onChange={(e)=>handleFun(e)} placeholder='Enter Password'/>
        <input type="submit" id="btn11" value="Login"></input>
        <input type="reset" id="btn22" value="clear"></input>
        <Link to ='/' id = "btn33">   Back   </Link>
        <p id="noAcc">Don't have an account? <Link to ='/register'id="btn44" >   Register   </Link></p>
        {/* <div  type = "register" id= "btn44" > Register </div> */}
        
        {/* <input type = "register" id= "btn44" >Don't have an account?  </input> */}
           {/* Don't have an account? <font color='red'>Register</font> */}
        </form>
        <div>
         <h3> {list!==null && list.message==="Invalid credentials" && <font color='red'>{list.message}</font>}</h3>
         {/* <h3> {list!==null && list.message==="Login successful" && <font color='green'>{list.message}</font>}</h3> */}
         <h3> {list!==null && list.message==="Login successful" && setLoggedIn(true) }</h3>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
