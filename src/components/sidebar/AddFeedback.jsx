import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddFeedback = () => {
    const [inputData,setInputData] = useState({feedbackText:'',rating:''})
 
    const navigate = useNavigate();
  function handleSubmit (event) {
    event.preventDefault()

    axios.post('http://localhost:3001/api/v1/feedback',inputData)
    .then(res=> {
        alert("Feedback Added successfully")
        navigate('/sidebar/feedback')
    }).catch(err=> console.log(err))
}

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
     <div className='w-50 border bg-light p-5'>
        <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor='name'>Feedback:</label>
            <input type = 'text' name = 'feedback' className='form-control'
            onChange={e=>setInputData({...inputData,name: e.target.value})}/>
        </div>
        <div>
            <label htmlFor='email'>Rating:</label>
            <input type = 'number' name = 'number' className='form-control'
            onChange={e=>setInputData({...inputData,email: e.target.value})}/>
        </div>
       
        
        <button className='btn btn-info'>Submit</button>
       
        </form>
     </div>
    </div> 
  )
}

export default AddFeedback