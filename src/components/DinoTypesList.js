// import React from 'react'


// const DinoTypesList = (props) => {

//   return (
//        <div>
     
//            <div className="d-flex mt-5 justify-content-center">
//              {props.listDinoTypes}
//            </div>
//        </div>
//      )
//    }

// export default DinoTypesList



import React from 'react'
import { CardColumns, Row, Col, Container } from 'react-bootstrap';

const DinoTypesList = (props) => {

  return (
 
  <center>
  <Row xs={1} md={2} className="g-4">
      
             {props.listDinoTypes}
       
    
    </Row>
    </center>
 
     )
   }

export default DinoTypesList

 

