import { ApiConstant } from "const";
import { call, put } from "redux-saga/effects";
import { HomeService } from "services";
import HomeActions from "redux/home.redux";

export function* login(params) {
  try {
    let response = yield call(HomeService.login, { data: params.data });
    if (response.status === ApiConstant.STT_OK) {
      yield put(HomeActions.success({ account: response.data }));
    } else {
      yield put(HomeActions.failure(response));
    }
  } catch (error) {
    yield put(HomeActions.failure(error.message));
  }
}
