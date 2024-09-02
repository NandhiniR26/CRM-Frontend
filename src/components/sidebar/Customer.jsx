
import Axios from 'axios';
import React,{useEffect,useState} from 'react';


const Customer = () => {
//   const [columns,setColumns] = useState([])
  // const [records,setRecords] = useState([])

  //useEffect(()=> {
    const url="http://localhost:3001/api/v1/customers"
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWNmYmQ5NWE3MDc0MDgxZmQyYzIyYSIsImlhdCI6MTcyNTI1OTM2MH0.bqLL_ZOboj4Rk4PGAGRvnpffUp7TZ-QbU3Ly2xD9wV8"
 //  Axios.get(url,{headers:{"Authorization":`${token}`}})
  Axios.get(url,{userName:"crm@gmail.com",password:"12345"})
   .then(res=> {
        console.log("success response:",res.data)
        //setColumns(Object.keys(res.data[0]))
        //setRecords(res.data)

   }).catch((err)=>{
    console.log("err response:",err.data)
   })
//  },[]
//)
  return (
    <>
    {/* <div className="container1 mt-5">
    <div><font size="5" color="white">Customers</font></div>
    <table className='table1'>
      <thead>
        <tr>
          {columns.map((c,i)=> (
             <th key = {i}>{c}</th>
          ))}
          </tr>
      </thead>
      <tbody>
        {
          records.map ((d,i)=> (
            <tr key = {i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.address}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div> */}
    </>
  );
}

export default Customer;