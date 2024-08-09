// CustomerList.jsx
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from the backend
    axios.get('http://localhost:3001/api/v1/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/v1/customers/${id}`)
      .then(() => {
        setCustomers(customers.filter(customer => customer._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Customers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <Button variant="warning" className="mr-2">Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(customer._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerList;
