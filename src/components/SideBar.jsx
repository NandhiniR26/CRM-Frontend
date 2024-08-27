import '../index.css'
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/customer",
            name:"Customers",
            icon:<FaUserAlt/>
        },
        {
            path:"/communication",
            name:"Communications",
            icon:<FaRegChartBar/>
        },
        {
            path:"/offers",
            name:"Offers&Coupons",
            icon:<FaCommentAlt/>
        },
        {
            path:"/mail",
            name:"Email",
            icon:<FaShoppingBag/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:<FaThList/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaThList/>
        }

    ]
    return (
        <div className="container" style={{marginLeft:"0px"}}>
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">CRM</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;