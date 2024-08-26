import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Front from './components/Front'
import AdminLogin from './components/AdminLogin'
import UserLogin from './components/UserLogin'
import Register from './components/Register';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './index.css'
import './App.css'
import Dashboard from './components/Dashboard';
import Customer from './components/Customer';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <>
    <div className='route'>
      <BrowserRouter>
      <ul>
        <li><Link  to = '/'></Link></li>
        <li><Link  to = '/adminLogin'></Link></li>
        <li><Link to = '/userLogin'></Link></li>
        <li><Link to = '/register'></Link></li>
        <li><Link to = '/dashboard'></Link></li>
        <li><Link to = '/customer'></Link></li>

      </ul>
      <Routes>
        <Route path = '/' element =  {<Front/>} />
        <Route path = '/adminLogin' element =  {<AdminLogin/>} />
        <Route path = '/userLogin' element =  {<UserLogin/>} />
        <Route path = '/register' element = {<Register/>}/>
        
        <Route path = '/sidebar' element = {<SideBar/>}/>
        
        

       </Routes>
       <SideBar>
        <Routes>
          <Route path="/customer" element={<Customer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </SideBar>
      
    </BrowserRouter>
        
    </div>
    </>
  )
}

export default App
