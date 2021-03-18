import React, {Component} from 'react';
import DinosaurEdit from '../components/DinosaurEdit'
import DeleteButton from '../components/DeleteButton'
import LikeButton from '../components/LikeButton'
import {Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap'


const DinosaurCard = (props) => {



  return (

    <React.Fragment>
        <Col xs="4">
            <Card className="card card-inverse card-success card-primary mb-3 text-center">
                <img src = {props.pictureUrl} alt = 'Artist impression of {props.name}' />
                  <Card.Header>{props.name}</Card.Header>
                  <p>Size: {props.size} {props.size ? "feet" : "?"} </p>
                  <p>Weight: {props.weight} {props.weight ? "pounds" : "?"}  </p>
                  <p>Year Discovered:  {props.yearDiscovered} {props.yearDiscovered ? "" : "?"} </p>
                  <p>Years Lived: {props.temporalRange}</p>
                  <Card.Text>{props.summary}</Card.Text>
                  {/* <br /><LikeButton /><br /> */}
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} id={props.id} eventKey="0">
                        <span>Edit {props.name}</span>
                      </Accordion.Toggle>
                    </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <DinosaurEdit
                        dinosaur={props.dinosaur}
                        url={props.url}
                        dinoId = {props.id}
                        dinoName = {props.name}
                        dinoSize = {props.size !== null ? props.size : ''}
                        dinoWeight = {props.weight !== null ? props.weight : ''}
                        dinoRange = {props.temporalRange !== null ? props.temporalRange : ''}
                        dinoYear = {props.yearDiscovered !== null ? props.yearDiscovered : ''}
                        dinoPic = {props.pictureUrl}
                        dinoSummary = {props.summary !== null ? props.summary : ''}  /* the terinary operators in here just check to see if the prop exists so it does not pass null down to the edit form, because that makes the form uncontrolled. */
                        era = { props.dinosaur.dino_type.era_id }
                        dinoTypeId = {props.dinotypeId}

                         />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                    <Card>
                      <Card.Body>
                        <DeleteButton dinosaur={props.dinosaur} dinosaurId={props.id} name={props.name} handleDelete = {props.handleDelete} />

                    </Card.Body>
                    </Card>
                </Accordion>
              </Card>
            </Col>
          </React.Fragment>
        );
      }
DinosaurCard.defaultProps = {
  dinoPic: 'https://ecdn.teacherspayteachers.com/thumbitem/Dinosaur-with-hand-sanitizer-and-face-mask-5487390-1587563440/original-5487390-1.jpg'

}
///so i need the commit button to change the div class to 'collapse show'
export default DinosaurCard
