import React, { useEffect, useRef, useState } from "react";
// import styles from "./Style.module.css";
import styles from "../Page/register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupData } from "../Redux/Auth/action";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// const init = {
//     id: nanoid(),
//     username: "",
//     email: "",
//     password: "",
//     tasks: [],
// };

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,12}$/;
const EMAIL_REGEX = /^[a-z0-9._]{3,26}@[a-z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Trial = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const username = USER_REGEX.test(user);
        setValidName(username);
    }, [user]);

    useEffect(() => {
        const res_email = EMAIL_REGEX.test(email);
        setValidEmail(res_email);
    }, [email]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, email, pwd]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const a1 = USER_REGEX.test(user);
        const a2 = USER_REGEX.test(email);
        const a3 = USER_REGEX.test(pwd);
        if (!a1 || !a2 || !a3) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, email, pwd);
        setSuccess(true);
    };

    // const [signUp, setSignUp] = useState({});

    // const { id, username, email, password } = signUp;

    // const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.isAuth);
    // console.log("user: ", user);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setSignUp({
    //         ...signUp,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(signupData(signUp, id));
    //     console.log(signUp);
    // };

    return (
        <>
            {/* {success ? (
                <h1>SignedIn</h1>
            ) : ( */}
                <form className={styles.sign_up_form} onSubmit={handleSubmit}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                        {errMsg}
                    </p>
                    <h2 className={styles.title}>Sign up</h2>

                    {/* UserName */}

                    <div className={styles.input_field}>
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            // value={username}
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            placeholder="Username"
                        />
                        <p
                            id="uidnote"
                            className={`${
                                userFocus && user && !validName
                                    ? `${styles.instructions}`
                                    : `${styles.offscreen}`
                            }`}
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 12 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            <strong>[A-Z,a-z,0-9,(_,-)]</strong> allowed.
                        </p>
                    </div>

                    {/* Email */}

                    <div className={styles.input_field}>
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            // ref={useRef}
                            autoComplete="off"
                            // value={username}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            placeholder="Email"
                        />
                        <p
                            id="emailnote"
                            className={
                                emailFocus && user && !validName
                                    ? "instructions"
                                    : "offscreen"
                            }
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 32 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            <strong>[A-Z,a-z,0-9,_,-]</strong> allowed.
                        </p>
                    </div>

                    {/* Password */}

                    <div className={styles.input_field}>
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            // ref={useRef}
                            // autoComplete="off"
                            // value={username}
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            placeholder="Password"
                        />
                        <p
                            id="pwdnote"
                            className={
                                pwdFocus && user && !validPwd
                                    ? "instructions"
                                    : "offscreen"
                            }
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            <strong>[A-Z,a-z,0-9,(!,@,#,$,%)]</strong> allowed.
                        </p>
                    </div>
                    <input
                        disabled={
                            !validName || !validEmail || !validPwd
                                ? true
                                : false
                        }
                        type="submit"
                        className={styles.btn}
                        value="Sign up"
                    />
                    <p className={styles.social_text}>
                        Or Sign up with social platforms
                    </p>
                    <div className={styles.social_media}>
                        <Link to="#" className={styles.social_icon}>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className={styles.social_icon}>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" className={styles.social_icon}>
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="#" className={styles.social_icon}>
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </form>
            {/* )} */}
        </>
    );
};

export default Trial;
