import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function LoginForm(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Form className="border" style={{padding: "15px", textAlign: "left"}}>

                        {/* email part */}
                        <Form.Group className="mb-3" controlId="FormNewEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        
                        {/* password part */}
                        <Form.Group className="mb-3" controlId="FormNewPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{marginRight: "10px"}}>Login</Button>
                        <Button variant="secondary" type="submit">forgot password</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm;