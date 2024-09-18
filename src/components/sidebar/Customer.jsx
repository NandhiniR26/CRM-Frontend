import axios from 'axios';
import Axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Customer = () => {
   //const [columns,setColumns] = useState([])
   const [records,setRecords] = useState([])
   //const [count,setCount]=useState(1)
   const navigate = useNavigate()
   var count=0
const url="https://crm-backend-d23x.onrender.com/api/v1/customers"
//var st=0
  useEffect(()=> {

    //  Axios.get(url,{headers:{"Authorization":`${token}`}})
    if(records.length===0)
    {
  Axios.get(url)
   .then(res=> {
        
        console.log("success response:",res.data)
        //setColumns(Object.keys(res.data[0]))
        setRecords(res.data.customers)
   }).catch((err)=>{
    console.log("err response:",err.data)
   })
    
  }
 },[]
  
)
const addCustomerStyle={
  position:"absolute",
  right:"40px",
  top:'20px'
}
  return (
    <>
    { <div className="container1 mt-5">
    <div align="center"><font size="6" color="Black"><b>CUSTOMERS</b></font></div>
    <br></br>
    <div className='text-end' style={addCustomerStyle}><Link to = "/sidebar/add" className='btn btn-primary'>Add Customers</Link></div>
    
    <table className='table1'>
      
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Preference</th>
          <th>Action</th> 
          </tr>
      
      <tbody>
        {
          records.map ((d)=> (
          
      <tr>
              <td>{count+=1}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.preferences}</td>
              <td align='center'>
                <Link to = {`/sidebar/edit/${d._id}`} className='btn btn-sm btn btn-success'>Edit</Link>
                {/* <Link to = {`/sidebar/delete/${d._id}`} className='btn btn-sm ms-1 btn btn-danger'>Delete</Link> */}
                <button onClick = {e=> handleSubmit (d._id)}className='btn btn-sm ms-1 btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div> }
    </>
  );
  function handleSubmit (id) {
   const confirm =  window.confirm('Do you want to delete')
   if (confirm) {
    axios.delete(`https://crm-backend-d23x.onrender.com/api/v1/customers/${id}`)
    .then (res=> {
      alert ('customer deleted')
      navigate(0  )
      
    }).catch (err => console.log(err))
   }
  }
}
export default Customer;