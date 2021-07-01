import React from 'react';
import { Link } from 'react-router-dom';
import {Card } from 'react-bootstrap'

const DinoTypeCard = (props) => {

  return (
    <Card key={props.id}>
        <Link to={`/${props.name}/dinosaurs`}>
        <img src = {props.pictureUrl} alt='Category of Dinosaur' className='card-img-top' />
          <span className="align-bottom"><h4 className = 'text-center'>{props.name}</h4></span>
      </Link>
    </Card>)

}

export default DinoTypeCard
