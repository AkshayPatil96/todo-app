import React, { useEffect, useState } from "react";
// import styles from "./Style.module.css";
import styles from "../Page/register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData, loginSuccess, signinData } from "../Redux/Auth/action";

const init = {
    username: "",
    password: "",
};

const Login = () => {
    const [login, setLogin] = useState(init);

    const { username, password } = login;

    const dispatch = useDispatch();
    const { users, user } = useSelector((state) => state.isAuth);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLogin({
            ...login,
            [name]: value,
        });
    };

    useEffect(() => {
        dispatch(getData());
    }, []);

    // const [data, setData] = useState({});
    let data = [];

    for (let i = 0; i < users.length; i++) {
        // console.log(users[i]);
        if (
            users[i].username === login.username &&
            users[i].password === login.password
        ) {
            data.push(users[i]);
            // setData(users[i]);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("data: ", data);
        // if (data === []) {
        //     alert("Please enter");
        // } else {
            dispatch(loginSuccess(data));
        // }
        // console.log("userssss: ", users);
        console.log("userrrr: ", user);
        // console.log(login);
    };

    return (
        <>
            <form className={styles.sign_in_form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign in</h2>
                <div className={styles.input_field}>
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        name="username"
                        // value={username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                </div>
                <div className={styles.input_field}>
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        name="password"
                        // value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className={`${styles.btn} ${styles.solid}`}
                />
                <p className={styles.social_text}>
                    Or Sign in with social platforms
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

export default Login;
