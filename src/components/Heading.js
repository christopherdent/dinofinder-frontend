import React from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap'


const Heading = () => {
  return (
    <Jumbotron>
          <Link to='/'>
            <h1 className='text-center' id="main-heading">DinoFinder 2020</h1>
          </Link>

            <br />
            <center><h5>The prehistoric card collection anyone can edit!</h5></center>
      </Jumbotron>
        )
    }

export default Heading
