import axios from "axios";
import { GET_USERS, SUCCESS_LOGIN, SUCCESS_SIGNUP } from "./actionType";

export const signUpSuccess = (users, token) => ({
    type: SUCCESS_SIGNUP,
    payload: {
        users: [...users],
        token,
    },
});

export const loginSuccess = (payload) => ({
    type: SUCCESS_LOGIN,
    payload: {
        user: payload,
    },
});

export const getUsers = (payload) => ({
    type: GET_USERS,
    payload,
});

export const signupData = (users, token) => async (dispatch) => {
    try {
        let res = await axios.post(`http://localhost:8080/users`, users);
        // let data = await res.data;
        dispatch(signUpSuccess(users, token));
    } catch (error) {
        console.log("error: ", error);
    }
};

export const loginData = (user) => async (dispatch) => {
    try {
        let res = await axios.post(`http://localhost:8080/users`,user);
        // let data = await res.data;
        dispatch(loginSuccess());
    } catch (error) {
        console.log("error: ", error);
    }
};

export const getData = () => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:8080/users`);
        let data = await res.data;
        dispatch(getUsers(data));
    } catch (error) {
        console.log("error: ", error);
    }
};
