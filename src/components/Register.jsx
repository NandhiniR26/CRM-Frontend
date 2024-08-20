import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import registerImage from '../images/registerImage.png'

const Register = () => {
  return (
    <div id="registerMainDiv">
      <div id="registerImg"> 
    <img src={registerImage} alt=""></img>
      </div>
      <div id="registerForm">
        <h2>REGISTER</h2>
        <form>
        <input type="text" id="textBox111" placeholder='Enter Username'/>
        <input type="text" id="textBox222" placeholder='Enter Email Id'/>
        <input type="password" id="textBox333" placeholder='Enter Password'/>
        <input type="password" id="textBox444" placeholder='Confirm Password'/>
        <input type="submit" id="btn111" value="Register"></input>
        <input type="reset" id="btn222" value="clear"></input>
        
       
        <Link to ='/' id = "btn333">   Logout   </Link>

        <p id="noAcc444"> Have an account? <Link to ='/userLogin' id="btn444" >   Login   </Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Register