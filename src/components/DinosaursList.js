import React from 'react';
import { Row } from 'react-bootstrap'

///will be responsible for rendering dinosaur cards
const DinosaursList = (props) => {

// <div className="d-flex mt-5 justify-content-center">
  return (
    <div>
      <Row>
        {props.listDinos}
      </Row>
    </div>
  )
}


export default DinosaursList
