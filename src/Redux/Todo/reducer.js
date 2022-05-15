import {
    ADD_TODO,
    DELETE_TODO,
    ERROR_TODO,
    REQUEST_TODO,
    SUCCESS_TODO,
} from "../Action/actionType";

const initState = {
    todo: {
        data: [],
        isLoading: false,
        isError: false,
        single: [],
    },
};

export const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todo: {
                    ...state.todo,
                    data: [...state.todo.data, payload],
                },
            };

        case REQUEST_TODO:
            return {
                ...state,
                todo: {
                    isLoading: true,
                    isError: false,
                    data: [],
                },
            };

        case SUCCESS_TODO:
            return {
                ...state,
                todo: {
                    isLoading: false,
                    isError: false,
                    data: payload,
                },
            };

        case DELETE_TODO:
            return {
                ...state,
                todo: {
                    ...state.todo,
                    data: state.todo.data.filter(
                        (item) => item.id !== payload.id
                    ),
                },
            };

        case ERROR_TODO:
            return {
                ...state,
                todo: {
                    isLoading: false,
                    isError: true,
                    data: [],
                },
            };

        default:
            return state;
    }
};
