import React from "react";

import ForgotPasswordForm from "../component/forms/ForgotPasswordForm";
import LoginForm from "../component/forms/LoginForm";
import NewUserForm from "../component/forms/NewUserForm";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function LoginPage(props) {
    // https://react-bootstrap.github.io/components/modal/
    const [show, setLogin, setPass, setNew] = useState(false);

    // const 

    return (
        <div>
            pick one of the 3 options, then a form will come up.

            <Stack direction="horizontal" gap={5}>
                <Button>login</Button>
                <Button>forgot password</Button>
                <Button>make new user</Button>
            </Stack>

            {/* <h1>login form</h1>
            <LoginForm />
            <hr />
            <h1>New User Form</h1>
            <NewUserForm />
            <hr />
            <h1>Forgot password form</h1>
            <ForgotPasswordForm /> */}
        </div>
    )
}

export default LoginPage;