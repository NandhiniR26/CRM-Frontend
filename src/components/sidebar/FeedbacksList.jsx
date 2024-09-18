
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackComponent from './FeedbackComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeedbacksList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    axios.get('https://crm-backend-d23x.onrender.com/api/v1/feedback')
      .then((response) => {
        console.log("s res :",response.data.feedbacks)
        setData(response.data.feedbacks.slice(0, 20)); // Limiting to 20
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }, []);
  // const addCustomerStyle={
  //   position:"absolute",
  //   right:"40px",
  //   top:'20px'
  // }

  return (
    <>
    {/* <div align="center"><font size="6" color="white">Feedbacks</font></div> */}
   
    <Container>
      <Row>
        {data.map((item) => (
          <Col key={item._id} xs={10} sm={6} md={4} lg={3}>
            <FeedbackComponent data={{customerId:item.customerId, feedbackText: item.feedbackText, rating: item.rating }} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};
export default FeedbacksList;