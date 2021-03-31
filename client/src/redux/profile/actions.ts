export enum ProfileActions {
  OPEN_PROFILE = "OPEN_PROFILE",
}

export type ProfileActionsType = OpenProfileType;

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
