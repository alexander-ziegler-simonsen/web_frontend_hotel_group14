import React from "react";

import ForgotPasswordForm from "../component/forms/ForgotPasswordForm";
import LoginForm from "../component/forms/LoginForm";
import NewUserForm from "../component/forms/NewUserForm";
import Button from "react-bootstrap/Button";
//import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { useContext } from "react";
import { useEffect } from "react";


// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

function LoginPage(props) {
    const [sharedInfo, setSharedInfo] = useState("");

    useEffect(() => {
        let res = localStorage.getItem("sharedInfo");
        if(res){
            setSharedInfo(res);
        }
    }, [])

    const styles = {
        formBtn: {
            fontWeight: "bold", 
            fontSize: 19,
           
            textAlign: "center",
            minWidth: 200,
            marginTop: 20

        },
        btnHolder: {
            
            float: "left",
            marginLeft: "45%",
            marginRight: "55%",
            textAlign: "center",
            marginTop: 10,
            marginBottom: 10
        }
    }

    // https://react-bootstrap.github.io/components/modal/
    // https://reactjs.org/docs/hooks-state.html 


    const [showLogin, setLogin] = useState(false);
    const [showPass, setPass] = useState(false);
    const [showNew, setNew] = useState(false);


    // this will be showed if the user have logged in 
    if(sharedInfo.length > 0) {
        return (
        <div>
            <h1>Hello {localStorage.getItem("sharedInfo")}</h1>
            <Button style={styles.formBtn} onClick={() => {
                localStorage.removeItem("sharedInfo");
                props.setNavbarSharedInfo("");
                setSharedInfo("");
            }}>logout</Button>
        </div>
        )
    }
    else // this will be showed if the user is not logged in
    {
        return (
        <div>
            pick one of the 3 options, then a form will come up.

            <div style={styles.btnHolder}>
                <Button style={styles.formBtn} onClick={() => setLogin(!showLogin)}>login</Button>
                {/* <Button style={styles.formBtn} onClick={() => setPass(!showPass)}>forgot password</Button> */}
                <Button style={styles.formBtn} onClick={() => setNew(!showNew)}>make new user</Button>
            </div>

            {/* login */}
            <Modal variant="primary" show={showLogin} onHide={() => {setLogin(!showLogin)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Login popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onLoginSuccess={(res) => {
                        localStorage.setItem("sharedInfo", res)
                        props.setNavbarSharedInfo(res);
                        setSharedInfo(res);
                        setLogin(false)
                    }}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setLogin(!showLogin)}>close window</Button>
                </Modal.Footer>
            </Modal>

            {/* forgot password */}
            {/* <Modal variant="primary" show={showPass} onHide={() => setPass(!showPass)}>
                <Modal.Header closeButton>
                    <Modal.Title>forgot password popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ForgotPasswordForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setPass(!showPass)}>close window</Button>
                </Modal.Footer>
            </Modal> */}

            {/* new user */}
            <Modal variant="primary" show={showNew} onHide={() => setNew(!showNew)}>
                <Modal.Header closeButton>
                    <Modal.Title>new user popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewUserForm closeModal={() => {
                        setNew(false)
                    }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setNew(!showNew)}>close window</Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
}

export default LoginPage;