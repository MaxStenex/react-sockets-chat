import { UserActions, UserActionsType } from "./actions";

export type UserInfoType = {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

export type UserStateType = UserInfoType & {
  errorMessage: string | null;
  isLoading: boolean;
};

export const initialState: UserStateType = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  errorMessage: null,
  isLoading: false,
};

export const userReducer = (
  state = initialState,
  action: UserActionsType
): UserStateType => {
  switch (action.type) {
    case UserActions.FETCH_USER_LOADING: {
      return { ...state, errorMessage: null, isLoading: true };
    }
    case UserActions.FETCH_USER_SUCCESS: {
      const { id, firstName, lastName, email } = action.payload.userInfo;
      return {
        ...state,
        id,
        firstName,
        lastName,
        email,
        isLoading: false,
        errorMessage: null,
      };
    }
    case UserActions.FETCH_USER_ERROR: {
      const { errorMessage } = action.payload;
      return { ...state, errorMessage, isLoading: false };
    }
    case UserActions.LOGOUT_USER: {
      return { ...state, ...initialState };
    }

    default:
      return state;
  }
};
