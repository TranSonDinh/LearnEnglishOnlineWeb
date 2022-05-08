import { ApiConstant } from "const";
import { call, put } from "redux-saga/effects";
import { TestingService } from "services";
import TestingActions from "redux/reading.redux";

export function* getTestingList() {
  try {
    let response = yield call(TestingService.getTestingList);
    if (response.status === ApiConstant.STT_OK) {
      yield put(TestingActions.success({ testings: response.data }));
    } else {
      yield put(TestingActions.failure(response));
    }
  } catch (error) {
    yield put(TestingActions.failure(error.message));
  }
}
