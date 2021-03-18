import React from 'react'
import { Link } from 'react-router-dom';
import DinoTypeCard from './DinoTypeCard'
//this will be a list of dinotypes specific to the era that was clicked.  I can still use the dinotypes container for this.

const DinoTypesList = (props) => {

  return (
       <div>
         <h2 className = 'text-center'>And what type of creatures are you looking for?</h2>
           <div className="d-flex mt-5 justify-content-center">
             {props.listDinoTypes}
           </div>
       </div>
     )
   }

export default DinoTypesList
