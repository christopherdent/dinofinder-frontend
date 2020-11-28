// import React from 'react';
// import {DinoTypesSlugs} from '../components/DinoTypeSlugs'
import React, { useState, useEffect } from "react";
export const FetchDinoTypes = (url) => {

///pseudocode  if eraname=triassic, let url equal 1
//if eraname = jurassic, let url equal 2..

const setUrl = (url) => {
if (url === 'Triassic') {
let url = '1';
} else if (url === 'Jurassic') {
let url = '2';
} else if (url === 'Cretaceous') {
let url = '3';
  }
}

let groot = (url === 'Triassic') ? ('1') : ((url === 'Jurassic') ? ('2') : ('3'))

return (dispatch) => {
 
  // fetch(`http://localhost:3000/api/v1/eras/${url === 'Triassic' ? '1' : '2'}/dino_types`)  ///should i be fetching to different urls based on the params from the first page?  yes...
  fetch(`http://localhost:3000/api/v1/eras/${groot}/dino_types`)
  .then(resp => resp.json())
  .then(dinotypes => dispatch({
      type: 'FETCH_DINOTYPES',
      payload: dinotypes
      }))
    }
  }
// }
