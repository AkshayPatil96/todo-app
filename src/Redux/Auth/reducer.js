import { GET_USERS, SUCCESS_LOGIN, SUCCESS_SIGNUP } from "./actionType";

const initState = {
    users: [],
    token: false,
    user: null,
};

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SUCCESS_SIGNUP:
            return {
                ...state,
                token: true,
                users: [...state.users, payload],
            };

        case SUCCESS_LOGIN:
            return {
                ...state,
                user: payload,
            };

        case GET_USERS:
            return {
                ...state,
                users: payload,
            };

        default:
            return state;
    }
};
