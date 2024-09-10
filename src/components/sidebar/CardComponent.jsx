// CardComponent.jsx
import React from 'react';

import { Card } from 'react-bootstrap';
import avatar from '../sidebar/images/user.png'
const CardComponent = ({ data }) => {
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
    width: '16rem', height:'25rem', margin: '2rem',backgroundColor:"white" 
  }
  return (
    <Card style={cardMain} className='cardStyle'>
      <Card.Body>
        <center>
        <img style={imgStyle} src={avatar} width="100"></img>
        </center>
        <center style={cStyle}>
          customer id:<Card.Text>{data.customerId}</Card.Text>
        </center>
        <hr size="5" color="black"></hr>
        
        <Card.Title style={cStyle}><center><b>Communication Type:</b><br></br>{data.communicationType}</center></Card.Title>
        <hr size="5" color="black"></hr>
        <Card.Text><b>Content:</b><p style={pStyle} align="justify">{data.content}</p></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
