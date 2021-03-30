import { userReducer, initialState, UserInfoType, UserStateType } from "./reducer";
import {
  fetchUserLoading,
  fetchUserSuccess,
  fetchUserError,
  logoutUser,
} from "./actions";

const userReducerInitialState = { ...initialState };

describe("User reducer", () => {
  it("Should handle loading", () => {
    expect(userReducer(userReducerInitialState, fetchUserLoading())).toEqual({
      ...userReducerInitialState,
      isLoading: true,
      errorMessage: null,
    });
  });

  it("User logged in successfully", () => {
    const mockUserInfo: UserInfoType = {
      id: 1,
      firstName: "firstname",
      lastName: "lastname",
      email: "email@email.com",
    };
    expect(userReducer(userReducerInitialState, fetchUserSuccess(mockUserInfo))).toEqual({
      ...userReducerInitialState,
      id: mockUserInfo.id,
      firstName: mockUserInfo.firstName,
      lastName: mockUserInfo.lastName,
      email: mockUserInfo.email,
      isLoading: false,
      errorMessage: null,
    });
  });

  it("User logging failed", () => {
    const errorMessage = "FAILED";
    expect(userReducer(userReducerInitialState, fetchUserError(errorMessage))).toEqual({
      ...userReducerInitialState,
      errorMessage,
      isLoading: false,
    });
  });

  it("Returns to initial state when user logout", () => {
    const fakeUserState: UserStateType = {
      id: 1,
      email: "email@email.com",
      firstName: "firstname",
      lastName: "lastname",
      errorMessage: null,
      isLoading: false,
    };
    expect(userReducer(fakeUserState, logoutUser())).toEqual({
      ...userReducerInitialState,
    });
  });
});
