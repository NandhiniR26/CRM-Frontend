import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Delete = () => {
  const {id} = useParams();
  const navigate = useNavigate()
 
  const confirm =  window.confirm('Do you want to delete')
  if (confirm) {
   axios.delete(`https://crm-backend-d23x.onrender.com/api/v1/customers/${id}`)
   .then (res=> {
     alert ('customer deleted')
     navigate('/sidebar/customer')
     
   }).catch (err => console.log(err))
  }
 }
 export default Delete