import React from 'react';
import { Row } from 'react-bootstrap';
 
const DinosaursList = (props) => {

// <div className="d-flex mt-5 justify-content-center">
  return (
    <Row xs={1} md={4} className="g-4">
      
      
        {props.listDinos}
       
      
    </Row>
  )
}


export default DinosaursList
