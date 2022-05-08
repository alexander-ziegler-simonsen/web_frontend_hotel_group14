import React from "react";

import ForgotPasswordForm from "../component/forms/ForgotPasswordForm";
import LoginForm from "../component/forms/LoginForm";
import NewUserForm from "../component/forms/NewUserForm";
import Button from "react-bootstrap/Button";
//import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function LoginPage(props) {
    // https://react-bootstrap.github.io/components/modal/
    // https://reactjs.org/docs/hooks-state.html 


    const [showLogin, setLogin] = useState(false);
    const [showPass, setPass] = useState(false);
    const [showNew, setNew] = useState(false);

    return (
        <div>
            pick one of the 3 options, then a form will come up.

            {/*<Stack direction="horizontal" gap={5}>*/}
                <Button onClick={() => setLogin(!showLogin)}>login</Button>
                <Button onClick={() => setPass(!showPass)}>forgot password</Button>
                <Button onClick={() => setNew(!showNew)}>make new user</Button>
            {/*</Stack>*/}

            {/* login */}
            <Modal variant="primary" show={showLogin} onHide={() => {setLogin(!showLogin)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Login popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setLogin(!showLogin)}>close window</Button>
                </Modal.Footer>
            </Modal>

            {/* forgot password */}
            <Modal variant="primary" show={showPass} onHide={() => setPass(!showPass)}>
                <Modal.Header closeButton>
                    <Modal.Title>forgot password popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ForgotPasswordForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setPass(!showPass)}>close window</Button>
                </Modal.Footer>
            </Modal>

            {/* forgot password */}
            <Modal variant="primary" show={showNew} onHide={() => setNew(!showNew)}>
                <Modal.Header closeButton>
                    <Modal.Title>new user popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewUserForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setNew(!showNew)}>close window</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginPage;