import React from 'react';
import { Link } from 'react-router-dom';

const DinoTypeCard = (props) => {

  return (

    props.dinotypes.map(dinotype =>
      <div key={dinotype.id} className='card'>

      <img src = {dinotype.picture_url} alt='dinotype' className='card-img-top' />

      <Link to={`/${dinotype.name}/dinosaurs`}>
      <span className="align-bottom"><h4 className = 'text-center'>{dinotype.name}</h4></span>

      </Link>
      </div>)
  )
}

export default DinoTypeCard
