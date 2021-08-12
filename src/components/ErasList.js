import React from 'react';
import { CardColumns } from 'react-bootstrap';


const ErasList = (props) => {

  return (
<div>
  <center>
    <CardColumns>
      <div>
        {props.listEras}
      </div>
    </CardColumns>
    </center>
</div>

  )

}


export default ErasList
