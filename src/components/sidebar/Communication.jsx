import axios from 'axios';
import React,{useEffect,useState} from 'react';
import CardsList from './CardsList';
import 'bootstrap/dist/css/bootstrap.min.css';
const Communication = () => {
 
  return (<>
    {/* <div><font size="7" color="white">Communications</font></div> */}
    <CardsList />   
    </>
  )
}

export default Communication