import React from 'react'
import { Link } from 'react-router-dom';

//this will be a list of dinotypes specific to the era that was clicked.  I can still use the dinotypes container for this.

const DinoTypesList = (props) => {

const dinoTypeCard = props.dinotypes.map(dinotype => <div key={dinotype.id} className='card'><p>{dinotype.name}</p></div>)  //probably make this its own component too 

  return (
       <div>
         <h2 className = 'text-center'>
           And what type of creatures are you looking for?
         </h2>
         <Link to='./dinosaurs'>
         <div className='row'>
           {dinoTypeCard}
         </div>
         </Link>
       </div>

  )

}


export default DinoTypesList
