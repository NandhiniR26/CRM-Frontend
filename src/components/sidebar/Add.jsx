import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [inputData,setInputData] = useState({name:'',email:'',phone:'',address:'',preferences:''})
 
    const navigate = useNavigate();
  function handleSubmit (event) {
    event.preventDefault()

    axios.post('http://localhost:3001/api/v1/customers',inputData)
    .then(res=> {
        alert("Customer Added successfully")
        navigate('/sidebar/customer')
    }).catch(err=> console.log(err))
}

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
     <div className='w-50 border bg-light p-5'>
        <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type = 'text' name = 'name' className='form-control'
            onChange={e=>setInputData({...inputData,name: e.target.value})}/>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type = 'email' name = 'email' className='form-control'
            onChange={e=>setInputData({...inputData,email: e.target.value})}/>
        </div>
        <div>
            <label htmlFor='phone'>Phone:</label>
            <input type = 'tel' name = 'phone' className='form-control'
            onChange={e=>setInputData({...inputData,phone: e.target.value})}/>
        </div>
        <div>
            <label htmlFor='address'>Address:</label>
            <input type = 'text' name = 'address' className='form-control'
            onChange={e=>setInputData({...inputData,address: e.target.value})}/>
        </div>
        <div>
            <label htmlFor='preferences'>Preference:</label>
            <input type = 'text' name = 'preference' className='form-control'
            onChange={e=>setInputData({...inputData,preferences: e.target.value})}/>
        </div><br />
        <button className='btn btn-info'>Submit</button>
        </form>
     </div>
    </div> 
  )
}

export default Add