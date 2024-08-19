import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Front from './components/Front'
import AdminLogin from './components/AdminLogin'
import UserLogin from './components/UserLogin'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './index.css'
import './App.css'

const App = () => {
  return (
    <>
    <div className='route'>
      <BrowserRouter>
      <ul>
        <li><Link to = '/'>Front</Link></li>
        <li><Link to = '/adminLogin'> Admin Login</Link></li>
        <li><Link to = '/userLogin'>User Login</Link></li>

      </ul>
      <Routes>
        <Route path = '/' element =  {<Front/>} />
        <Route path = '/adminLogin' element =  {<AdminLogin/>} />
        <Route path = '/userLogin' element =  {<UserLogin/>} />
        </Routes>
    </BrowserRouter>
        
    </div>
    </>
  )
}

export default App
