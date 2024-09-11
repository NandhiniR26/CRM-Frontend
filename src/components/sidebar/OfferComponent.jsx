
import React , { Component } from 'react';

import { Card } from 'react-bootstrap';
import  img1  from '../../images/Christmas.jpg'
import  img2  from '../../images/CyberMonday.jpg'
import  img3  from '../../images/Easter.jpeg'
import  img4  from '../../images/Halloween.jpg'
import  img5  from '../../images/Anniversary.jpg'
import  img6  from '../../images/BackToSchool.jpg'
import  img7  from '../../images/BlackFriday.webp'
import  img8  from '../../images/Laborday.jpg'
import  img9  from '../../images/NewYear.png'
import  img10  from '../../images/Spring.webp'
import  img11 from '../../images/Thanksgiving.jpg'
import  img12 from '../../images/Valentine.jpg'
import  img13 from '../../images/Winter.jpeg'
import  img14 from '../../images/Summer.webp'
import  img15 from '../../images/Independence.jpg'



//import Summer from '../sidebar/images/Winter.jpeg'
//import { img1 } from './ImageModule';
const OfferComponent = ({ data }) => {

const arrImg=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15]
var s=-1
  const pStyle={
    fontSize:"14px"
  }
  const cStyle={
    fontSize:"14px",
    fontWeight:"bold"
  }
  const imgStyle={
    border:"2px solid red",
    backgroundColor:"gray",
    borderRadius:"50%"
  }
  const cardMain={
    width: '16rem', height:'35rem', margin: '2rem',backgroundColor:"white" 
  }
  return (
    <Card style={cardMain} className='cardStyle'>
      <Card.Body>
        {/* {<center><img style={imgStyle} src={avatar1} width="100"></img> </center>}  */}
        {/* <center style={cStyle}>
          customer id:<Card.Text>{data.customerId}</Card.Text>
        </center> */}
        <h2>--{data.imgValue}</h2>
         <center><img style={imgStyle} src={arrImg[parseInt(data.imgValue)]} width="100"></img></center>
        <hr size="5" color="black"></hr>

        
        <Card.Title style={cStyle}><center><b>Offer Code:</b><br></br>{data.code}</center></Card.Title>
        <hr size="5" color="black"></hr>
        <Card.Text><b>Description:</b><p style={pStyle} align="justify">{data.description}</p></Card.Text>
        <Card.Text><b>Discount:</b><p style={pStyle} align="justify">{data.discountAmount}</p></Card.Text>
        <Card.Text><b>StartDate:</b><p style={pStyle} align="justify">{data.startDate}</p></Card.Text>
        <Card.Text><b>EndDate:</b><p style={pStyle} align="justify">{data.endDate}</p></Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default OfferComponent;





















 