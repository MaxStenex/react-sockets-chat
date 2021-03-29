import { LoginValuesType } from "../../types";
import { UserInfoType } from "./reducer";

export enum UserActions {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_LOADING = "FETCH_USER_LOADING",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

export type UserActionsType =
  | FetchUserType
  | FetchUserSuccessType
  | FetchUserErrorType
  | FetchUserLoadingType;

export type FetchUserType = {
  type: UserActions.FETCH_USER;
  payload: {
    loginValues: LoginValuesType;
  };
};

export const fetchUser = (loginValues: LoginValuesType): FetchUserType => ({
  type: UserActions.FETCH_USER,
  payload: {
    loginValues,
  },
});

type FetchUserLoadingType = {
  type: UserActions.FETCH_USER_LOADING;
};

export const fetchUserLoading = (): FetchUserLoadingType => ({
  type: UserActions.FETCH_USER_LOADING,
});

type FetchUserSuccessType = {
  type: UserActions.FETCH_USER_SUCCESS;
  payload: {
    userInfo: UserInfoType;
  };
};

export const fetchUserSuccess = (userInfo: UserInfoType): FetchUserSuccessType => ({
  type: UserActions.FETCH_USER_SUCCESS,
  payload: {
    userInfo,
  },
});

type FetchUserErrorType = {
  type: UserActions.FETCH_USER_ERROR;
  payload: {
    errorMessage: string;
  };
};

export const fetchUserError = (errorMessage: string): FetchUserErrorType => ({
  type: UserActions.FETCH_USER_ERROR,
  payload: {
    errorMessage,
  },
});
