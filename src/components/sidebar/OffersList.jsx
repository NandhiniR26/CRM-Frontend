
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OfferComponent from './OfferComponent';
import { Container, Row, Col } from 'react-bootstrap';

const OffersList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    axios.get('http://localhost:3001/api/v1/offersAndCoupons')
      .then((response) => {
        console.log("s res :",response.data.offersAndCoupons)
        setData(response.data.offersAndCoupons.slice(0, 20)); // Limiting to 20
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
            <OfferComponent data={{customerId:item.customerId, code: item.code, description: item.description , discountAmount: item.discountAmount, startDate: item.startDate, endDate: item.endDate }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersList;
