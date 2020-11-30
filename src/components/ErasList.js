import React from 'react';
import EraCard from './EraCard'
///will be responsible for rendering a list of dinosaurs
// const ErasList = (props) => {
const ErasList = (props) => {

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
