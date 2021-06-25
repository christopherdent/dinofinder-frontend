import React from 'react'


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
