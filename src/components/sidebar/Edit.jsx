import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
    console.log("id from customer",id)
    const [data,setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        if(data.length===0)
            {
       axios.get(`https://crm-backend-d23x.onrender.com/api/v1/customers/${id}`)
       .then((res)=> {setData(res.data.customer)
                console.log("success response:",res.data.customer)
                console.log("message:",res.data.message)
       })
       .catch((err)=> console.log("error reason: ",err))
    }},[])
      function handleSubmit (event) {
        event.preventDefault()
        console.log("update data:",data)
        axios.put(`https://crm-backend-d23x.onrender.com/api/v1/customers/${id}`,data)
        .then(res=> {
            alert ("Updated Successfully")
            navigate('/sidebar/customer')
        })
        .catch(err=> console.log(err))
      }
    return (

        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
         <div className='w-50 border bg-light p-5'>
            <form onSubmit  = { handleSubmit }>
             <div>
                <label htmlFor='name'>ID:</label>
                <input type = 'text' disabled name = 'name' value = {data._id}  className='form-control'
               />
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input type = 'text'  name = 'name' value = {data.name}  className='form-control'
                onChange={e=> setData({...data,name: e.currentTarget.value})}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type = 'email' name = 'email'  value = {data.email} className='form-control'
                 onChange={e=> setData({...data,email: e.currentTarget.value})}/>
            </div>
            <div>
                <label htmlFor='phone'>Phone:</label>
                <input type = 'tel' name = 'phone' value = {data.phone} className='form-control'
                 onChange={e=> setData({...data,phone: e.currentTarget.value})}/>
            </div>
            <div>
                <label htmlFor='address'>Address:</label>
                <input type = 'text' name = 'address' value = {data.address} className='form-control'
                 onChange={e=> setData({...data,address: e.currentTarget.value})}/>
            </div>
            <div>
                <label htmlFor='preferences'>Preference:</label>
                <input type = 'text' name = 'preference' value = {data.preferences} className='form-control'
                 onChange={e=> setData({...data,preferences: e.currentTarget.value})}/>
            </div><br />
            <button className='btn btn-info'>Update</button>
            </form>
         </div>
        </div> 
   

)}
export default Edit