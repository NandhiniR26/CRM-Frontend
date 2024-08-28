// import '../index.css'
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaInbox,
    FaEnvelope,
    FaDollarSign,
    FaComment
}from "react-icons/fa";
import { FaCircleArrowLeft, FaTty } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/sidebar/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/sidebar/customer",
            name:"Customers",
            icon:<FaUserAlt/>
        },
        {
            path:"/sidebar/communication",
            name:"Communications",
            icon:<FaTty/>
        },
        {
            path:"/sidebar/offers",
            name:"Offers&Coupons",
            icon:<FaDollarSign/>
        },
        {
            path:"/sidebar/mail",
            name:"Email",
            icon:<FaEnvelope/>
        },
        {
            path:"/sidebar/feedback",
            name:"Feedback",
            icon:<FaComment/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaCircleArrowLeft/>
        }

    ]
    return (
        <>
        <div className="container" style={{marginLeft:"-10px"}}>
           <div style={{width: isOpen ? "250px" : "250px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">CRM</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       {/* <FaBars onClick={toggle}/> */}
                   </div>
             </div>
               <h1 style={{textAlign:"center", marginTop:"-10px"}}>CRM</h1>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeClassName="active" style={{textDecoration:"none"}}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "block"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
             
           </div>
           <Outlet />             
           {/* <main>{children}</main> */}
           
        </div>
    
    </>
);
};

export default Sidebar;