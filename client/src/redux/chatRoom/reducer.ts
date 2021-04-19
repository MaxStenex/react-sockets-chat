import { ChatRoomActions, ChatRoomActionsType } from "./actions";

export type ChatRoomStateType = {
  roomUserId: number | null;
};

const initialState: ChatRoomStateType = {
  roomUserId: null,
};

export const chatRoomReducer = (
  state = initialState,
  action: ChatRoomActionsType
): ChatRoomStateType => {
  switch (action.type) {
    case ChatRoomActions.JOIN_ROOM: {
      return { ...state, roomUserId: action.payload.roomUserId };
    }

    default: {
      return state;
    }
  }
};
