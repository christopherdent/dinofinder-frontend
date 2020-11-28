import React from 'react';
import { Link } from 'react-router-dom';

const EraCard = (props) => {

  return (


    props.eras.map(era =>
      <div key={era.id} className='card'>

      <Link to={`./${era.name}/dino_types`}>
        <img src={era.picture_url} alt='prehistoric world' className='card-img-top' />
        <h4 className = 'text-center'>{era.name}</h4>
      </Link>

      </div>
    )


  )
}

export default EraCard
