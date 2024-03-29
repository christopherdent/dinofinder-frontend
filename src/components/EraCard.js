import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const EraCard = (props) => {

  return (


      <Card
        variant = 'top'
        key={props.id}
        style={{ width: '200' }}
        className="mb-2"
        id="era-card"
        >
      <Link to={`./${props.name}/dino_types`}>
        <Card.Img src={props.pictureUrl} alt='prehistoric world' />
         <Card.Title>
        <h4 className = 'text-center' id='era-text'>{props.name}</h4>
        </Card.Title>
        </Link>
      </Card>

  )

}

export default EraCard
