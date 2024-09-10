import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Front from './components/Front'
import AdminLogin from './components/AdminLogin'
import UserLogin from './components/UserLogin'
import Register from './components/Register';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './index.css'
import './App.css'
import Dashboard from './components/sidebar/Dashboard';
import Customer from './components/sidebar/Customer';
import SideBar from './components/sidebar/SideBar';
import Communication from './components/sidebar/Communication';
import Offers from './components/sidebar/Offers';
import Feedback from './components/sidebar/Feedback';
import Add from './components/sidebar/Add';
import Edit from './components/sidebar/Edit';


const App = () => {
  return (
  
    <div className='route'>
      <BrowserRouter>
      {/* <ul>
        <li><Link  to = '/'></Link></li>
        <li><Link  to = '/adminLogin'></Link></li>
        <li><Link to = '/userLogin'></Link></li>
        <li><Link to = '/register'></Link></li>
        <li><Link to = '/sidebar/dashboard'></Link></li>
        <li><Link to = '/customer'></Link></li>

      </ul> */}
      <Routes>
        <Route path = '/' element =  {<Front />} />
        <Route path = '/adminLogin' element =  {<AdminLogin />} />
        <Route path = '/userLogin' element =  {<UserLogin />} />
        <Route path = '/register' element = {<Register />}/>
        <Route path = 'sidebar' element = {<SideBar />}>
          <Route index element={<Dashboard></Dashboard>}/> 
          {/* this is default page */}
          <Route path="customer" element={<Customer />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path = "communication" element = {<Communication />} />
          <Route path = "offers" element = {<Offers />}/>
          {/* <Route path = "mail" element = {<Mail />} /> */}
          <Route path = "feedback" element = {<Feedback />}/>
          <Route path = "add" element = {<Add/>}/>
          <Route path = "edit/:id" element = {<Edit/>}/>
          {/* <Route path = "delete/:id" element = {<Delete/>}/> */}
          </Route>
         
        </Routes>
    </BrowserRouter>
        
    </div>
    
  )
}

export default App
