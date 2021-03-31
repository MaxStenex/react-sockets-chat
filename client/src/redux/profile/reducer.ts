import { ProfileActionsType } from "./actions";

export type ProfileStateType = {
  isOpened: boolean;
};

const initialState: ProfileStateType = {
  isOpened: false,
};

export const profileReducer = (
  state: ProfileStateType = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
