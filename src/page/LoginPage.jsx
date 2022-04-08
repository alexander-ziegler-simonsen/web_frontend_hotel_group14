import React from "react";

import ForgotPasswordForm from "../component/forms/ForgotPasswordForm";
import LoginForm from "../component/forms/LoginForm";
import NewUserForm from "../component/forms/NewUserForm";

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function LoginPage(props) {
    return (
        <div>
            <h1>login form</h1>
            <LoginForm />
            <hr />
            <h1>New User Form</h1>
            <NewUserForm />
            <hr />
            <h1>Forgot password form</h1>
            <ForgotPasswordForm />
        </div>
    )
}

export default LoginPage;