
import React from 'react';

import { Card } from 'react-bootstrap';
// import avatar from '../sidebar/images/user.png'
const FeedbackComponent = ({ data }) => {
  const pStyle={
    fontSize:"14px"
  }
  const cStyle={
    fontSize:"14px",
    fontWeight:"bold"
  }
  const imgStyle={
    backgroundColor:"gray",
    borderRadius:"50%"
  }
  const cardMain={
    width: '13rem', height:'20rem', margin: '2rem',backgroundColor:"white" 
  }
  return (
    <Card style={cardMain} className='cardStyle1'>
      <Card.Body>
        {/* <center>
        <img style={imgStyle} src={avatar} width="100"></img>
        </center> */}
        <center style={cStyle}>
          customer id:<Card.Text>{data.customerId}</Card.Text>
        </center>
        <hr size="5" color="black"></hr>
        
        <Card.Title style={cStyle}><center><b>Feedback:</b><br></br>{data.feedbackText}</center></Card.Title>
        <hr size="5" color="black"></hr>
        <Card.Text><b>Rating:</b><span style={pStyle} align="justify"><b style={{fontSize:"20px"}}> {data.rating}</b></span></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedbackComponent;




