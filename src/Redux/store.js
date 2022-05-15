import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
    isAuth: authReducer,
});

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);