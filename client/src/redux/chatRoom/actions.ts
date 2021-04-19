export enum ChatRoomActions {
  JOIN_ROOM = "JOIN_ROOM",
}

export type ChatRoomActionsType = JoinRoomActionType;

type JoinRoomActionType = {
  type: ChatRoomActions.JOIN_ROOM;
  payload: {
    roomUserId: number;
  };
};

export const joinRoom = (roomUserId: number): JoinRoomActionType => ({
  type: ChatRoomActions.JOIN_ROOM,
  payload: {
    roomUserId,
  },
});
