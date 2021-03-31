import { combineReducers } from "redux";
import { profileReducer, ProfileStateType } from "./profile/reducer";
import { userReducer, UserStateType } from "./user/reducer";

export type RootStateType = {
  user: UserStateType;
  profile: ProfileStateType;
};

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
