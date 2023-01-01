import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./Auth/reducer";

const middlewares = applyMiddleware(thunk);

export const store = createStore(loginReducer,middlewares);