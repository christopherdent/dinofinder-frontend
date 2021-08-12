// import React from 'react';
// import { Link } from 'react-router-dom';
// import {Card } from 'react-bootstrap'

// const DinoTypeCard = (props) => {

//   return (
//     <Card key={props.id}>
//         <Link to={`/${props.name}/dinosaurs`}>
//         <img src = {props.pictureUrl} alt='Category of Dinosaur' className='card-img-top' />
//           <span className="align-bottom"><h4 className = 'text-center'>{props.name}</h4></span>
//       </Link>
//     </Card>
  

  
//     )

// }

// export default DinoTypeCard


import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Col } from 'react-bootstrap'

const DinoTypeCard = (props) => {

  return (
    <Col>
    <Card
    
    key={props.id}
    style={{ width: '75%' }} 
    className="mb-5"
    >
        <Link to={`/${props.name}/dinosaurs`}>
        <Card.Img src = {props.pictureUrl} alt='Category of Dinosaur' className='card-img-top' />
        <Card.Title>{props.name} </Card.Title>
      </Link>
    </Card>
    </Col>

  
    )

}

export default DinoTypeCard