import { combineReducers } from "redux";
import { chatRoomReducer, ChatRoomStateType } from "./chatRoom/reducer";
import { profileReducer, ProfileStateType } from "./profile/reducer";
import { userReducer, UserStateType } from "./user/reducer";

export type RootStateType = {
  user: UserStateType;
  profile: ProfileStateType;
  chatRoom: ChatRoomStateType;
};

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  chatRoom: chatRoomReducer,
});

export default rootReducer;
