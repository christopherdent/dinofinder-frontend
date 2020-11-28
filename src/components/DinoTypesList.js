import React from 'react'
import { Link } from 'react-router-dom';
import DinoTypeCard from './DinoTypeCard'
//this will be a list of dinotypes specific to the era that was clicked.  I can still use the dinotypes container for this.

const DinoTypesList = (props) => {


  return (
       <div>
         <h2 className = 'text-center'>
           And what type of creatures are you looking for?
         </h2>

           <div className='row'>
           <DinoTypeCard dinotypes={props.dinotypes} />
         </div>

       </div>

  )

}


export default DinoTypesList
