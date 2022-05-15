import React, { useState } from "react";
// import styles from "./Style.module.css";
import styles from "../Page/register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupData } from "../Redux/Auth/action";
import { nanoid } from "nanoid";

const init = {
    id: nanoid(),
    username: "",
    email: "",
    password: "",
    tasks: [],
};

const Signup = () => {
    const [signUp, setSignUp] = useState(init);

    const { id, username, email, password } = signUp;

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.isAuth);
    // console.log("user: ", users);


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setSignUp({
            ...signUp,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            signUp.username === "" ||
            signUp.password === "" ||
            signUp.email === ""
        ) {
            alert("Please enter valid Credientials");
        } else {
            dispatch(signupData(signUp, id));
            setSignUp(init);
            console.log(signUp);
        }
    };

    return (
        <>
            <form className={styles.sign_up_form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign up</h2>
                <div className={styles.input_field}>
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                </div>
                <div className={styles.input_field}>
                    <i className="fas fa-envelope"></i>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.input_field}>
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <input type="submit" className={styles.btn} value="Sign up" />
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
        </>
    );
};

export default Signup;
