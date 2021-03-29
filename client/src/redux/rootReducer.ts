import { combineReducers } from "redux";
import { userReducer, UserStateType } from "./user/reducer";

export type RootStateType = {
  user: UserStateType;
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
