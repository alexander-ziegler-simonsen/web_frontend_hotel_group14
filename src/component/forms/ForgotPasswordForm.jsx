import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";


// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function ForgotPasswordForm(props) {
    
    const [email, setEmail] = useState("");
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Form className="border" style={{padding: "15px", textAlign: "left"}}>
                        <h1>Reset your password</h1>

                        {/* email part */}
                        <Form.Group className="mb-3" controlId="FormNewEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={(v) => setEmail(v.target.value)} type="email" placeholder="Your email" />
                            <Form.Text className="text-muted">
                                You will get a mail, where you can reset your password.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={() => {
                            const auth = getAuth();
                            auth().sendPasswordResetEmail(auth, email)
                            .then((e) => {console.log("it worked", e)})
                            .catch((e) => {console.log("it didn't work", e)});
                        }}>Reset password</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPasswordForm;