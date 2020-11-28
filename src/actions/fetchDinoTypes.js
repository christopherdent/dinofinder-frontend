import React from 'react';
import DinoTypesContainer from '../containers/DinoTypesContainer'


export function fetchDinoTypes() {


///pseudocode  if eraname=triassic, let url equal 1
//if eraname = jurassic, let url equal 2...
return (dispatch) => {

  fetch('http://localhost:3000/api/v1/eras/1/dino_types')  ///should i be fetching to different urls based on the params from the first page?  yes...
  .then(resp => resp.json())
  .then(dinotypes => dispatch({
      type: 'FETCH_DINOTYPES',
      payload: dinotypes
    }))
  }
}
