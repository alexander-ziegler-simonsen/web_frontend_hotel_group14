import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Stack from 'react-bootstrap/Stack';


import 'bootstrap/dist/css/bootstrap.min.css';

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function RoomView(props) {
    return (
        <Card className="border" style={{width: '18rem', marginBottom: '25px'}}>
            <Card.Body>
                <Card.Title><h3>{props.header}</h3></Card.Title>
                <Card.Text>{props.bodyText}</Card.Text>

                {/* <Stack gap={5} direction="horizontal">*/}
                <div><Button variant='primary'>order now {props.orderNow}</Button></div>
                <div><Button variant='light'>add to list {props.addToList}</Button></div>
                {/*</Stack>*/}


            </Card.Body>
        </Card>

    )
}

export default RoomView;