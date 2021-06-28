import { combineReducers } from "redux";
import screenReducer from "./screenReducer";
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  screenReducer,todoReducer
});

export default rootReducer;
