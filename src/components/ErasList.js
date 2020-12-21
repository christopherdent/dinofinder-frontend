import React from 'react';
import EraCard from './EraCard'
import { Card, CardColumns } from 'react-bootstrap';

///will be responsible for rendering a list of dinosaurs
// const ErasList = (props) => {
const ErasList = (props) => {

  return (
<div>
  <CardColumns>
    <div>
      {props.listEras}
    </div>
  </CardColumns>
</div>

  )

}


export default ErasList
