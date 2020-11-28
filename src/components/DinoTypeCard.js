import React from 'react';


const DinoTypeCard = (props) => {

  return (
    props.dinotypes.map(dinotype => <div key={dinotype.id} className='card'><img src={dinotype.picture_url} alt='type of dinosaur' /><h4 className = 'text-center'>{dinotype.name}</h4></div>)  //probably make this its own component
  )
}

export default DinoTypeCard
