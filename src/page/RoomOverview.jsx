import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RoomView from "../component/RoomView"

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function RoomOverview(props) {
    return (
        <Container fluid={true}>
            <Row>
                <p>Here you can see an overview of all the rooms of "this room type" - showing some props values | name = {props.name} | time = {props.time}</p>
                <p>For now the page is not showing real data, so we don't know if the room is booked or not</p>
            </Row>
            <Row>
                <Col>
                    <RoomView header="Window view, 2 beds" bodyText="good for those in the friend zone" orderNow="" addToList="" />
                </Col>
                <Col>
                    <RoomView header="lots of ceiling windows, 3 beds" bodyText="look at the sky" orderNow="" addToList="" />
                </Col>
                <Col>
                    <RoomView header="jacuzzi, 1 big bed" bodyText="one does not simply copy memes" orderNow="" addToList="" />
                </Col>
                <Col>
                    <RoomView header="no windows, 1 bed" bodyText="but it was aliens" orderNow="" addToList="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RoomView header="0 beds, just a floor" bodyText="then I took an arrow to the knee" orderNow="" addToList="" />
                </Col>
                <Col>
                    <RoomView header="no floor, just the void" bodyText="is that you cj ?" orderNow="" addToList="" />
                </Col>
                <Col>
                    <RoomView header="You don't want to know" bodyText="one number 9" orderNow="" addToList="" />
                </Col>
                <Col>
                    <RoomView header="'we didn't listen'" bodyText="here we go again" orderNow="" addToList="" />
                </Col>
            </Row>
        </Container>
    )
}

export default RoomOverview;