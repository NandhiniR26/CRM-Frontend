import React,{ useEffect } from 'react'
import { Link} from 'react-router-dom'
import '../index.css'
import registerImage from '../images/registerImage.png'
import { useState } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [username,setUserName]=useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [list,setList]=useState(null)
  // const [inputs,setInputs] = useState({})
  const [loggedIn,setLoggedIn]=useState(false) // true: login success otherwise failure
  const navigate=useNavigate()

  const setUserNameFun=(event)=>{
    setUserName(event.target.value)
  }
  const setEmailFun = (event)=>{
    setEmail(event.target.value)
  }
  const setPasswordFun = (event)=>{
    setPassword(event.target.value)
  }
  const setConfirmPasswordFunc = (event)=>{
    setConfirmPassword(event.target.value)
  }

const clearFun= ()=>{
  setUserName("")
  setEmail("")
  setPassword("")
  setConfirmPassword("")
}
const handleSubmit=(event)=>{
  event.preventDefault()
  if(password !== confirmPassword){
    alert("Password doesn't match")
    return
  }
   var userObj  = {
    userName: username,
    email: email,
    password: password
  }

   Axios.post("http://localhost:3001/api/v1/users/register",userObj) .then((res)=>{
    console.log("Registered successfully",res.data)                                      
     setList(res.data)
   }).catch((err)=>{
    console.log("Failed to register",err.data)
    setList(err.data)
   })
   }
   
   //  console.log("test",userObj)
   useEffect(()=>{
    if(loggedIn===true)
    {      
      navigate("/userLogin")
      return
    }
  }) 
  if(loggedIn===true)
  {
    return
  }
return (
    <div id="registerMainDiv">
      <div id="registerImg"> 
    <img src={registerImage} alt=""></img>
      </div>
      <div id="registerForm">
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" id="textBox111" value={username} onChange={(e)=>setUserNameFun(e)} placeholder='Enter Username'/>
        <input type="email" id="textBox222" value= {email} onChange={(e)=>setEmailFun(e)} placeholder='Enter Email Id'/>
        <input type="password" id="textBox333" value= {password} onChange={(e)=>setPasswordFun(e)} placeholder='Enter Password'/>
        <input type="password" id="textBox444" value= {confirmPassword} onChange = {(e)=>setConfirmPasswordFunc(e)}  placeholder='Confirm Password'/>
        <input type="submit" id="btn111" value="Register" ></input>
        <input type="reset" id="btn222" value="clear" onClick={clearFun}></input>
              
        <Link to ='/' id = "btn333">   Logout   </Link>

        <p id="noAcc444"> Have an account? <Link to ='/userLogin' id="btn444" >   Login   </Link> </p>

        </form>
        <div>
    <h4><font color="green">{list!==null && list.message}</font></h4>
    <h3> {list!==null && list.message==="User created successfully" && setLoggedIn(true) }</h3> 
        </div>
      </div>
    </div>
  )
}

export default Register