import React from 'react';

const DinosaurCard = (props) => {
  return (
  <>
      {props.dinosaurs.map(dinosaur => <div
        key={dinosaur.id}
        className='card'>
        <img src = {dinosaur.picture_url} />
        <p>{dinosaur.name}</p>
        <p>Size: {dinosaur.size} feet </p>
        <p>Weight: {dinosaur.weight} pounds </p>
        <p>Year Discovered:  {dinosaur.year_discovered}</p>
        <p>Years Lived: {dinosaur.temporal_range}</p>
        <p>{dinosaur.summary}</p>
        </div>)}
  </>
  )
}


export default DinosaurCard
