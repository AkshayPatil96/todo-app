import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainDiv } from "../Components/Styles";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import styles from "./register.module.css";
import login from "../Images/login.svg";
import signup from "../Images/signup.svg";

const Register = () => {
    // const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleSignUp = () => {
        setIsSignUp(true);
    };

    const toggleSignIn = () => {
        setIsSignUp(false);
    };

    return (
        <>
            <MainDiv>
                <div
                    className={`${styles.container} ${
                        isSignUp ? `${styles.sign_up_mode}` : null
                    }`}
                >
                    <div className={styles.forms_container}>
                        <div className={styles.signin_signup}>
                            <Login />

                            <Signup />
                        </div>
                    </div>

                    <div className={styles.panels_container}>
                        <div className={`${styles.panel} ${styles.left_panel}`}>
                            <div className={styles.content}>
                                <h3>New here ?</h3>
                                <p>
                                    If you are new here, please register and
                                    enjoy.
                                </p>
                                <button
                                    className={`${styles.btn} ${styles.transparent}`}
                                    id="sign-up-btn"
                                    onClick={toggleSignUp}
                                >
                                    Sign up
                                </button>
                            </div>
                            <img src={login} className={styles.image} alt="" />
                        </div>
                        <div
                            className={`${styles.panel} ${styles.right_panel}`}
                        >
                            <div className={styles.content}>
                                <h3>One of us ?</h3>
                                <p>
                                    If you are our existing user then login with
                                    your username & password.
                                </p>
                                <button
                                    className={`${styles.btn} ${styles.transparent}`}
                                    id="sign-in-btn"
                                    onClick={toggleSignIn}
                                >
                                    Sign in
                                </button>
                            </div>
                            <img src={signup} className={styles.image} alt="" />
                        </div>
                    </div>
                </div>
            </MainDiv>
        </>
    );
};

export default Register;
