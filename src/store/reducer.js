import { landingSliceReducer } from "../screens/landing/redux/slice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ landingSliceReducer });
export default rootReducer;
