import React from 'react';
import { Link } from 'react-router-dom';
import EraCard from './EraCard'
///will be responsible for rendering a list of dinosaurs
// const ErasList = (props) => {
const ErasList = (props) => {


const eraCard = props.eras.map(era => <div key={era.id} className='card'><img src={era.picture_url} /><h4 className = 'text-center'>{era.name}</h4></div>)  //probably make this its own component

  return (
    <div>
      <h2 className = 'text-center'>
        Choose an Era to Begin
      </h2>

      <div className="d-flex mt-5 justify-content-center">
        <EraCard eras={props.eras} />

      </div>

    </div>
  )

}


export default ErasList
