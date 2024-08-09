// CommunicationHistory.jsx
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

const CommunicationHistory = () => {
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/communications')
      .then(response => setCommunications(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Communication History</h2>
      <ListGroup>
        {communications.map(comm => (
          <ListGroup.Item key={comm._id}>
            {comm.date}: {comm.message}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommunicationHistory;
