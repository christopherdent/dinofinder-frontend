import React from 'react'


///will be responsible for rendering a list of dinosaurs
// const ErasList = (props) => {
const ErasList = (props) => {

  return (
    <div>
    List of Eras Component
    {props.eras.map(era => <li key={era.id}>{era.name}</li>)}


    </div>
  )

}


export default ErasList
