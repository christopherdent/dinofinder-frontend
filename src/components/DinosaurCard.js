import React, {Component} from 'react';
import DinosaurEdit from '../components/DinosaurEdit'
import DeleteButton from '../components/DeleteButton'
import {Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap'

const DinosaurCard = (props) => {

  return (

    <React.Fragment>
        <Col xs="4">
            <Card className="card card-inverse card-success card-primary mb-3 text-center">
                <img src = {props.pictureUrl} alt = 'Artist impression of {props.name}' />
                  <Card.Header>{props.name}</Card.Header>
                  <p>Size: {props.size} feet </p>
                  <p>Weight: {props.weight} pounds </p>
                  <p>Year Discovered:  {props.yearDiscovered}</p>
                  <p>Years Lived: {props.temporalRange}</p>
                  <Card.Text>{props.summary}</Card.Text>

                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} eventKey="0">
                            Edit {props.name}
                        </Accordion.Toggle>
                    </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <DinosaurEdit
                        dinosaur={props.dinosaur}
                        url={props.url}
                        dinoId = {props.id}
                        dinoName = {props.name}
                        dinoSize = {props.size}
                        dinoWeight = {props.weight}
                        dinoRange = {props.temporalRange}
                        dinoYear = {props.yearDiscovered}
                        dinoPic = {props.pictureUrl}
                        dinoSummary = {props.summary}
                        era = {props.dinosaur.dino_type.era_id}
                        dinoTypeId = {props.dinotypeId} />
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


export default DinosaurCard
