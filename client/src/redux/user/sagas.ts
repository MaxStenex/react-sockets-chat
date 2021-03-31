import { call, put, takeLatest } from "redux-saga/effects";
import { authUserWithCookie, loginUser } from "../../api";
import {
  fetchUserError,
  fetchUserLoading,
  fetchUserSuccess,
  FetchUserType,
  UserActions,
} from "./actions";
import { UserInfoType } from "./reducer";

function* fetchUserWithCookie() {
  try {
    const { data }: { data: UserInfoType } = yield call(authUserWithCookie);
    const { id, firstName, lastName, email } = data;
    yield put(fetchUserSuccess({ id, firstName, lastName, email }));
  } catch (error) {}
}

function* fetchUserSaga(action: FetchUserType) {
  try {
    yield put(fetchUserLoading());
    const { data }: { data: UserInfoType } = yield call(
      loginUser,
      action.payload.loginValues
    );
    const { id, firstName, lastName, email } = data;
    yield put(fetchUserSuccess({ id, firstName, lastName, email }));
  } catch (error) {
    const errorMessage = error.response.data.message || error.response.statusText;
    yield put(fetchUserError(errorMessage));
  }
}

export function* userSaga() {
  yield takeLatest(UserActions.FETCH_USER, fetchUserSaga);
  yield takeLatest(UserActions.AUTH_WITH_COOKIE, fetchUserWithCookie);
}
