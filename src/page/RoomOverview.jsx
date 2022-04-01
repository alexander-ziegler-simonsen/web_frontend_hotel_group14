import React from "react";
// import { Grid, Container,  Typography } from "@mui/material"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RoomView from "../component/RoomView"

function RoomOverview(props) {
    return (
        <Container fluid={true}>
            <row>
            <p>Here you can see an overview of all the rooms of "this room type" - this is props value = {props.name} and {props.time}</p>
                <p>For now the page is not showing real data, so we don't know if the room is booked or not</p>
            </row>
            <row>
                <Col  >
                    <RoomView header="this is a header text" bodyText="here we have all the body text" orderNow="" addToList="" />
                </Col>
                <Col  >
                    <RoomView header="this is a header text" bodyText="here we have all the body text" orderNow="" addToList="" />
                </Col>
                <Col  >
                    <RoomView header="this is a header text" bodyText="here we have all the body text" orderNow="" addToList="" />
                </Col>

                <Col >
                    <RoomView header="this is a header text" bodyText="here we have all the body text" orderNow="" addToList="" />
                </Col>
                <Col  >
                    <RoomView header="this is a header text" bodyText="here we have all the body text" orderNow="" addToList="" />
                </Col>
                <Col >
                    <RoomView header="this is a header text" bodyText="here we have all the body text" orderNow="" addToList="" />
                </Col>

            </row>
        </Container>
    )
}

export default RoomOverview;