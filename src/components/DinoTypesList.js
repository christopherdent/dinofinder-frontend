import React from 'react'


const DinoTypesList = (props) => {

  return (
       <div>
     
           <div className="d-flex mt-5 justify-content-center">
             {props.listDinoTypes}
           </div>
       </div>
     )
   }

export default DinoTypesList
