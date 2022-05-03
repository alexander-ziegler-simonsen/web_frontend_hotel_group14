import React from 'react';
import {Link} from "react-router-dom";
import {ListGroup, Card, NavDropdown, Accordion, Button, ButtonGroup} from "react-bootstrap";
import './Style.css';

/**
 * Author: Azmi Uslu (s185736)
 * Type: Will render the details of each room.
 * @property room - this is the chosen roomtype.
 * @param props
 * @return {JSX.Element}
 **/

export const RoomDetails = props => {
  const {room} = props;

  return (<>
      <Accordion>
        <Card style={{overflow: 'visible'}}>
          <Card.Header>
            <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey={`${room.roomTypeSelection} (${room.id})`}>
              {`${room.roomTypeSelection} (${room.id})`}
            </Accordion.Toggle>
            <ButtonGroup aria-label="Options">
                <NavDropdown.Item as={Link}  to={`/booking/edit/${room.id}`}>Make Changes</NavDropdown.Item>
            </ButtonGroup>
          </Card.Header>
          <Accordion.Collapse
            eventKey={`${room.roomTypeSelection} (${room.id})`}>
            <Card.Body>
                {
                  Object.keys(
                    room.showOrderDetails()
                  )
                    .map((field, index) => (
                      <ListGroup.Item key={index}>
                        {field}: {
                        room.showOrderDetails()[field]
                      }
                      </ListGroup.Item>
                    ))
                }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}