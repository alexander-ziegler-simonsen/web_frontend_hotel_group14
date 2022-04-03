import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function NewUserForm(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Form className="border" style={{padding: "15px", textAlign: "left"}}>
                        {/* a good part of this code, is inspired by https://react-bootstrap.netlify.app/forms/overview/  */}

                        {/* email part */}
                        <Form.Group className="mb-3" controlId="FormNewEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                            <Form.Text className="text-muted">
                                this is just a placholder, so we know how to do it later.
                            </Form.Text>
                        </Form.Group>
                        
                        {/* password part */}
                        <Form.Group className="mb-3" controlId="FormNewPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                It have to have 1 number, use big and small letters and be 8 characters or longer.
                            </Form.Text>
                        </Form.Group>

                        {/* name part */}
                        <Form.Group className="mb-3" controlId="FormNewName">
                            <Form.Label>Your full name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                            <Form.Text className="text-muted">
                                This name will be send to the hotel, when ever you make a booking.
                            </Form.Text>
                        </Form.Group>

                        {/* phone number part */}
                        <Form.Group className="mb-3" controlId="FormNewPhone">
                            <Form.Label>Your phone number</Form.Label>
                            <Form.Control type="number" placeholder="Your phone number" />
                            <Form.Text className="text-muted">
                                Only numbers, we are not checking this value, so do it right.
                            </Form.Text>
                        </Form.Group>

                        {/* gender part (just a placeholder for now) */}
                        <Form.Group className="mb-3" controlId="FormNewGender">
                            <Form.Check type="switch" label="Boy" />
                            <Form.Check type="switch" label="Girl" />
                            <Form.Check type="switch" label="Other" />
                            <Form.Check type="switch" label="Attack Helicopter" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Make new user</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default NewUserForm;