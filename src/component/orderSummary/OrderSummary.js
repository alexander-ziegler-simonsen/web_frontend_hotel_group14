import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import {LoaderIndicator} from "../bookingMisc/LoaderIndicator";
import {AppConsumer} from "../../AppContext/AppContext";
import {Alert} from "../bookingMisc/Alert";
import {RoomDetails} from "../bookingMisc/RoomDetails";
import {NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Style.css';

/**
 * Author: Azmi Uslu (s185736)
 * Type: Will display the bookings.
 * @return {JSX.Element}
 **/

export const OrderSummary = () => {
  return (
      <AppConsumer>
        {({load_indicator, rooms, alert}) => (
              <Container>
                {alert.display ? (
                          <Alert
                              display={alert.display}
                              announcement={alert.announcement}/>) : ''}
                <Row>
                  <Col>
                      <div className="blockBehind row center">
                          <h2 className="text-center my-5">Your Booking Portal</h2>
                      </div>
                      <NavDropdown.Item as={Link} to="/booking/orders">Goto Orders</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/booking/booknow">Book Now</NavDropdown.Item>
                  </Col>
                </Row>
                {load_indicator ? (<Row className="justify-content-center mt-5">
                        <LoaderIndicator/>
                      </Row>) : (rooms.map((v, i) => (<RoomDetails key={i} room={v}/>)))}
              </Container>)}
      </AppConsumer>
  )
};