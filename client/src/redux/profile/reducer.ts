import { ProfileActions, ProfileActionsType } from "./actions";

export type ProfileStateType = {
  isOpened: boolean;
  userId: number | null;
};

const initialState: ProfileStateType = {
  isOpened: false,
  userId: null,
};

export const profileReducer = (
  state: ProfileStateType = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    case ProfileActions.CLOSE_PROFILE: {
      return { ...state, isOpened: false, userId: null };
    }
    case ProfileActions.OPEN_PROFILE: {
      return { ...state, isOpened: true, userId: action.payload.userId };
    }

    default: {
      return state;
    }
  }
};
