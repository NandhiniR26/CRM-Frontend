import React from 'react'
import adminLoginImage from '../images/adminLoginImage.png'
import '../index.css'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  
  return (
    <div id="adminMainDiv">
      <div id="adminImg"> 
    <img src={adminLoginImage} alt=""></img>
      </div>
      <div id="adminLoginForm">
        <h2>ADMIN LOGIN</h2>
        <form>
        <input type="text" id="textBox1" placeholder='Enter Email Id'/>
        <input type="password" id="textBox2" placeholder='Enter Password'/>
        <input type="submit" id="btn1" value="Login"></input>
        <input type="reset" id="btn2" value="clear"></input>
      
       
        <Link to ='/' id = "btn3">   Back   </Link>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin