import axios from "axios";
import {
    ADD_TODO,
    DELETE_TODO,
    ERROR_TODO,
    REQUEST_TODO,
    SUCCESS_TODO,
} from "./actionType";

export const getTodoRequest = () => ({
    type: REQUEST_TODO,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const getTodoSuccess = (payload) => ({
    type: SUCCESS_TODO,
    payload,
});

export const deleteAddedTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
});

export const getTodoError = () => ({
    type: ERROR_TODO,
});

export const addTodoData = (payload) => async (dispatch) => {
    // dispatch(getTodoError());
    try {
        let res = await axios.post(`http://localhost:8080/todos`, payload);
        // let data = await res.data;
        dispatch(getTodoData());
    } catch (error) {
        console.log("error: ", error);
        // dispatch(getTodoError());
    }
};

export const getTodoData = () => async (dispatch) => {
    dispatch(getTodoError());
    try {
        let res = await axios.get(`http://localhost:8080/todos`);
        let data = await res.data;

        dispatch(getTodoSuccess(data));
    } catch (error) {
        dispatch(getTodoError());
    }
};

export const deleteTodo = (data, id) => async (dispatch) => {
    try {
        let res = await axios.delete(`http://localhost:8080/todos/${id}`);
        dispatch(deleteAddedTodo(data));
    } catch (error) {
        console.log("error: ", error);
    }
};
