import React , { Component } from 'react';
import { Card } from 'react-bootstrap';
import  img1  from '../../images/Summer.webp'
import  img2  from '../../images/Winter.jpeg'
import  img3  from '../../images/NewYear.png'
import  img4  from '../../images/Spring.webp'
import  img5  from '../../images/BlackFriday.webp'
import  img6  from '../../images/CyberMonday.jpg'
import  img7  from '../../images/Valentine.jpg'
import  img8  from '../../images/Easter.jpeg'
import  img9  from '../../images/Laborday.jpg'
import  img10  from '../../images/Halloween.jpg'
import  img11 from '../../images/Thanksgiving.jpg'
import  img12 from '../../images/Independence.jpg'
import  img13 from '../../images/BackToSchool.jpg'
import  img14 from '../../images/Christmas.jpg'
import  img15 from '../../images/Anniversary.jpg'

//import Summer from '../sidebar/images/Winter.jpeg'
//import { img1 } from './ImageModule';
const OfferComponent = ({ data }) => {

const objImg={"SUMMER2024":img1,"WINTER2024":img2,"NEWYEAR2025":img3,"SPRING2024":img4,"BLACKFRIDAY2024":img5,"CYBERMONDAY2024":img6,"VALENTINES2024":img7,"EASTER2024":img8,"LABORDAY2024":img9,"HALLOWEEN2024":img10,"THANKSGIVING2024":img11,"INDEPENDENCE2024":img12,"BACKTOSCHOOL2024":img13,"CHRISTMAS2024":img14,"ANNIVERSARY2024":img15}
var s=-1
  const pStyle={
    fontSize:"14px"
  }
  const cStyle={
    fontSize:"14px",
    fontWeight:"bold"
  }
  const imgStyle={
   height:"6rem",
    backgroundColor:"gray"
   
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
       
         <center><img style={imgStyle} src={objImg[data.code]} width="100"></img></center>
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





















 