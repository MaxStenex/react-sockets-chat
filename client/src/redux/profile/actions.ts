export enum ProfileActions {
  OPEN_PROFILE = "OPEN_PROFILE",
  CLOSE_PROFILE = "CLOSE_PROFILE",
}

export type ProfileActionsType = OpenProfileType | CloseProfileType;

type OpenProfileType = {
  type: ProfileActions.OPEN_PROFILE;
  payload: {
    userId: number;
  };
};

export const openProfile = (userId: number): OpenProfileType => ({
  type: ProfileActions.OPEN_PROFILE,
  payload: { userId },
});

type CloseProfileType = {
  type: ProfileActions.CLOSE_PROFILE;
};

export const closeProfile = (): CloseProfileType => ({
  type: ProfileActions.CLOSE_PROFILE,
});
