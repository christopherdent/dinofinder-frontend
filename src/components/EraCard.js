import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Container, CardColumns } from 'react-bootstrap';


const EraCard = (props) => {

  return (


    props.eras.map(era =>
      <Card
        variant = 'top'
        key={era.id}
        style={{ width: '200' }}
        className="mb-2"
        >
      <Link to={`./${era.name}/dino_types`}>
        <Card.Img src={era.picture_url} alt='prehistoric world' />

          <Card.Title>
        <h4 className = 'text-center'>{era.name}</h4>
        </Card.Title>
        </Link>
      </Card>

    )

  )

}

export default EraCard
