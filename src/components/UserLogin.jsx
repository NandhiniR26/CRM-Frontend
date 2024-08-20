import React from 'react'
import '../index.css'
import userLoginImage from '../images/userLoginImage.png'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div id="userMainDiv">
      <div id="userImg"> 
    <img src={userLoginImage} alt=""></img>
      </div>
      <div id="userLoginForm">
        <h2>USER LOGIN</h2>
        <form>
        <input type="text" id="textBox11" placeholder='Enter Email Id'/>
        <input type="password" id="textBox22" placeholder='Enter Password'/>
        <input type="submit" id="btn11" value="Login"></input>
        <input type="reset" id="btn22" value="clear"></input>
        <Link to ='/' id = "btn33">   Back   </Link>
        <p id="noAcc">Don't have an account? <Link to ='/register'id="btn44" >   Register   </Link></p>
        {/* <div  type = "register" id= "btn44" > Register </div> */}
        
        {/* <input type = "register" id= "btn44" >Don't have an account?  </input> */}
           {/* Don't have an account? <font color='red'>Register</font> */}
        </form>
      </div>
    </div>
  )
}

export default UserLogin
