import {combineReducers} from "redux";
import users from "./UserReducer";

const AppReducer = combineReducers({
    users,
});

export default AppReducer;
