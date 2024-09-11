import React from 'react'
import '../index.css'

import adminImage from '../images/admin.png'
import userImage from '../images/user.png'
//import crmTitle from '../images/crmTitle.jpg'
import { Link } from 'react-router-dom'
const Front = () => {    
  return (
    <>
    <h1 id="frontPageTitle">CRM</h1>
    {/* <img id = "title" src={crmTitle}/> */}
   <div className='imageDisplay' align="center"> 
  {/* <img id="backImage" src={image} style={{width:"100%",height:"670px"}}></img> */}
  <Link to = '/adminLogin'> 
  <img id="adminImage" src={adminImage} style={{width:"200px",height:"200px"}}></img>
  </Link>
  <Link  to = '/userLogin'>
  <img id="userImage" src={userImage} style={{width:"200px",height:"200px"}}></img>
  </Link>
   </div>
  
    </>
  )
}
export default Front