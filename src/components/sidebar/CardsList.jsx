// CardsList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import { Container, Row, Col } from 'react-bootstrap';

const CardsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    axios.get('https://crm-backend-d23x.onrender.com/api/v1/communicationHistory')
      .then((response) => {
        console.log("s res :",response.data.communicationHistory)
        setData(response.data.communicationHistory.slice(0, 20)); // Limiting to 20
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col key={item._id} xs={10} sm={6} md={4} lg={3}>
            <CardComponent data={{customerId:item.customerId, communicationType: item.communicationType, content: item.content }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsList;
